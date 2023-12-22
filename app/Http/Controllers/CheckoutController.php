<?php

namespace App\Http\Controllers;

use App\Mail\CheckoutRequested;
use App\Mail\OrderConfirmed;
use App\Models\Order;
use App\Models\Product;
use App\Models\User;
use Exception;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\Response;
use PhpParser\Node\Stmt\TryCatch;

class CheckoutController extends Controller
{
    // handle checkout request: store the order in db
    public function store()
    {
        $data = Request::validate([
            'email' => 'required|email',
            'items' => 'required|array',
            'items.*.product_id' => 'numeric|exists:products,id',
            'items.*.quantity' => 'numeric'
        ]);


        $user = User::firstOrCreate(['email' => $data['email']], ['name' => '', 'role' => 'customer', 'password' => '']);
        $setupIntent = $user->createSetupIntent();

        $inputItems =  collect($data['items']);
        // Computing total price:
        $prices = Product::whereIn('id', $inputItems->pluck('product_id'))->select('price')->get()->pluck('price'); // List of prices of order items
        $totalPrice = 0;
        foreach ($inputItems as $index => $item) {
            $totalPrice += $item['quantity'] * $prices[$index];
        }

        $order = $user->orders()->create(['secret' => $setupIntent->client_secret, 'total_price' => $totalPrice]);
        $order->order_items()->createMany($inputItems);

        try {
            Mail::to($data['email'])->send(new CheckoutRequested($order->id));
        } catch (Exception $e) {
            $order->delete();
            return Response::json($e->getMessage(), 500);
        }

        return Response::json(['message' => 'success']);
    }

    // pay the order
    public function update()
    {
        $data = Request::validate([
            'secret' => 'required|string',
            'payment_method' => 'required|string',
            'address' => 'required|string'
        ]);

        $order = Order::with('user')->where('secret', $data['secret'])->first();
        $user = $order->user;
        $user->createOrGetStripeCustomer();
        $user->addPaymentMethod($data['payment_method']);
        $user->charge($order->total_price * 100, $data['payment_method'], ['off_session' => true]);

        $order->is_paid = true;
        $order->address = $data['address'];
        $order->status = 'paid';
        $order->save();

        Mail::to($user->email)->send(new OrderConfirmed($order->id));

        return Response::json(['message' => 'success']);
    }
}
