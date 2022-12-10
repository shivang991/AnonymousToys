<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\Storage;

class ProductController extends Controller
{
    public function __construct()
    {
        $this->middleware(['auth:sanctum', 'ability:productManager,server:update'])->except(['index', 'indexFavourite', 'show']);
    }

    public function index()
    {
        $searchInput = Request::query('search');
        $productBuilder = Product::where('title', 'LIKE', "$searchInput%");

        $add_filter = function (string $field) use ($productBuilder) {
            $input = Request::query($field);
            if (is_array($input))
                $productBuilder = $productBuilder->whereIn($field, $input);
        };
        // $add_filter('application');
        $add_filter('brand');
        return $productBuilder
            ->select('id', 'title', 'price', 'image_url', 'is_limited_edition', 'is_low_stock', 'is_promoted')
            ->paginate(6);
    }
    public function indexFavourite()
    {
        return Response::json(Product::where('is_favourite', true)->select('id', 'title', 'image_url')->get());
    }
    public function store()
    {
        $data = Request::validate([
            'title' => 'required',
            'description' => 'required',
            'price' => 'required|numeric',
            'brand' => 'required',
            'image' => 'required|image',
            'is_limited_edition' => 'required|boolean',
            'is_low_stock' => 'required|boolean',
            'is_promoted' => 'required|boolean',
        ]);
        $imgPath = Request::file('image')->store('products');

        $imgUrl = Storage::url($imgPath);

        $productAttrs = collect($data)
            ->merge([
                'image_path' => $imgPath,
                'image_url' => $imgUrl,
            ])
            ->toArray();

        Product::create($productAttrs);
        return Response::json(['message' => 'success']);
    }

    public function show(Product $product)
    {
        return Response::json($product);
    }

    public function update(Product $product)
    {
        $data = Request::validate([
            'title' => 'required',
            'description' => 'required',
            'price' => 'required|numeric',
            'brand' => 'required',
            'is_limited_edition' => 'boolean',
            'is_low_stock' => 'boolean',
            'is_promoted' => 'boolean',
        ]);

        $image = Request::file('image');
        if ($image) {
            Storage::delete($product->image_path);
            $imgPath = $image->store('products');
            $imgUrl = Storage::url($imgPath);
            $product->image_url = $imgUrl;
            $product->image_path = $imgPath;
        }
        $product->title = $data['title'];
        $product->description = $data['description'];
        $product->price = $data['price'];
        $product->brand = $data['brand'];
        $product->is_limited_edition = $data['is_limited_edition'];
        $product->is_low_stock = $data['is_low_stock'];
        $product->is_promoted = $data['is_promoted'];
        $product->save();

        return Response::json(['message' => 'success']);
    }
    public function updateFavourite(Product $product)
    {
        $data = Request::validate(['replace' => 'numeric']);
        if (array_key_exists('replace', $data))
            Product::where('id', $data['replace'])->update(['is_favourite' => false]);
        if (Product::where('is_favourite', true)->count() > 4) return;
        $product->is_favourite = !$product->is_favourite;
        error_log($product->is_favourite);
        $product->save();
        return Response::json(['message' => 'success']);
    }

    public function destroy(Product $product)
    {
        Storage::delete($product->image_path);
        $product->delete();
        return Response::json(['message' => 'success']);
    }
}
