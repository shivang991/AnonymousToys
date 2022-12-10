<?php

use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\LogoutController;
use App\Http\Controllers\Auth\AdminController;
use App\Http\Controllers\Auth\StaffController;
use App\Http\Controllers\CarouselImageController;
use App\Http\Controllers\CheckoutController;
use App\Http\Controllers\Choices\ProductFieldChoices;
use App\Http\Controllers\ContactMessageController;
use App\Http\Controllers\CustomerReviewController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\ProductController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
 */

Route::post('/login', [LoginController::class, 'index']);
Route::post('/logout', [LogoutController::class, 'index']);


Route::prefix("/user")->group(function () {
    Route::middleware('auth:sanctum')->get('', function (Request $request) {
        return $request->user();
    });
    Route::get('/all', [AdminController::class, 'index']);
    Route::post('/admin/register', [AdminController::class, 'store']);
    Route::post('/admin/update', [AdminController::class, 'update']);
    Route::delete('/admin/image', [AdminController::class, 'destroyImage']);

    Route::post('/staff/create', [StaffController::class, 'store']);
    Route::post('/staff/update/{user}', [StaffController::class, 'update']);
    Route::delete('/staff/{user}', [StaffController::class, 'destroy']);
    Route::delete('/staff/image/{user}', [StaffController::class, 'destroyImage']);
    Route::get('/staff/{user}', [StaffController::class, 'show']);
});

Route::prefix('/checkout')->group(function () {
    Route::post('', [CheckoutController::class, 'store']);
    Route::post('/pay', [CheckoutController::class, 'update']);
});

Route::prefix('/order')->group(function () {
    Route::get('/all', [OrderController::class, 'index']);
    Route::get('/{id}', [OrderController::class, 'show']);
    Route::post('/update/{order}', [OrderController::class, 'update']);
});

Route::prefix('/contact')->group(function () {
    Route::post('/create', [ContactMessageController::class, 'store']);
    Route::get('/all', [ContactMessageController::class, 'index']);
    Route::get('/{message}', [ContactMessageController::class, 'show']);
    Route::delete('/{message}', [ContactMessageController::class, 'destroy']);
});

Route::prefix('/review')->group(function () {
    Route::post('/create', [CustomerReviewController::class, 'store']);
    Route::get('/all', [CustomerReviewController::class, 'index']);
    Route::get('/random', [CustomerReviewController::class, 'indexRandom']);
    Route::post('/update/{review}', [CustomerReviewController::class, 'update']);
    Route::delete('/{review}', [CustomerReviewController::class, 'destroy']);
});

Route::prefix('/post')->group(function () {
    Route::post('/create', [PostController::class, 'store']);
    Route::get('/all', [PostController::class, 'index']);
    Route::delete('/{id}', [PostController::class, 'destroy']);
    Route::get('/{id}', [PostController::class, 'show']);
});

Route::prefix('/product')->group(function () {
    Route::get('/all', [ProductController::class, 'index']);
    Route::get('/favorite', [ProductController::class, 'indexFavourite']);
    Route::get('/{product}', [ProductController::class, 'show']);
    Route::post('/create', [ProductController::class, 'store']);
    Route::post('/update/{product}', [ProductController::class, 'update']);
    Route::post('/update-favorite/{product}', [ProductController::class, 'updateFavourite']);
    Route::delete('/{product}', [ProductController::class, 'destroy']);
});

Route::prefix('/carousel')->group(function () {
    Route::get('', [CarouselImageController::class, 'index']);
    Route::post('/create', [CarouselImageController::class, 'store']);
    Route::post('/update/{item}', [CarouselImageController::class, 'update']);
    Route::delete('/{item}', [CarouselImageController::class, 'destroy']);
});


Route::prefix('/choices')->group(function () {
    Route::get('/brands', [ProductFieldChoices::class, 'brands']);
});
