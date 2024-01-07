<?php

namespace App\Http\Controllers;

use App\Mail\OrderDelivered;
use App\Mail\OrderShipped;
use App\Models\Order;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\Response;

class OrderController extends Controller
{
    public function __construct()
    {
        $this->middleware(['auth:sanctum', 'ability:customerServiceManager,server:update'])->except(['show']);
    }
    public function index()
    {
        return Order::with('user:email,id')
            ->where('is_paid', true)
            ->select('id', 'user_id', 'created_at', 'total_price', 'status')
            ->paginate(10);
    }
    public function show($id)
    {
        return Response::json(
            Order::with(['order_items' => function ($query) {
                $query->with('product:id,title,price');
            }, 'user:id,email'])
                ->where('id', $id)
                ->select('id', 'user_id', 'created_at', 'secret', 'address', 'is_paid', 'total_price')
                ->first()
        );
    }

    public function update(Order $order)
    {
        $data = Request::validate([
            'guide_number' => 'nullable|max:255',
            'postal_service' => 'nullable|max:255',
        ]);

        if (array_key_exists('guide_number', $data)) $order->guide_number = $data['guide_number'];
        if (array_key_exists('postal_service', $data)) $order->postal_service = $data['postal_service'];

        switch ($order->status) {
            case 'paid':
                $order->status = 'shipped';
                Mail::to($order->user->email)->send(new OrderShipped($order));
                break;
            case 'shipped':
                $order->status = 'delivered';
                Mail::to($order->user->email)->send(new OrderDelivered($order));
            default:
                break;
        }

        $order->save();
        return Response::json(['message' => 'success']);
    }
}
