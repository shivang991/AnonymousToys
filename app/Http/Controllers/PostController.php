<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\Storage;

class PostController extends Controller
{
    public function __construct()
    {
        $this->middleware(['auth:sanctum', 'ability:postCreator,server:update'])->except(['index', 'show']);
    }
    public function store()
    {
        $data = Request::validate(['content' => 'required', 'title' => 'required']);
        $post = Post::create($data);
        $uploadedImgs = Request::file('images');
        $postImages = [];

        if (is_array($uploadedImgs)) {
            foreach ($uploadedImgs as $index => $img) {
                $path = $img->store('posts');
                $url = Storage::url($path);
                array_push($postImages, [
                    'index' => $index,
                    'url' => $url,
                    'path' => $path
                ]);
            }
        }

        $post->post_images()->createMany($postImages);

        return Response::json(['message' => 'success']);
    }
    public function index()
    {
        return Post::with('thumbnail_image:url,post_id')->select('title', 'id', 'created_at')->paginate(10);
    }
    public function destroy($id)
    {
        $post = Post::with('post_images:post_id,path')->where('id', $id)->first();
        foreach ($post->post_images as $image) Storage::delete($image->path);
        $post->delete();
        return Response::json(['message' => 'success']);
    }
    public function show($id)
    {
        $post = Post::with('post_images:post_id,index,url')->where('id', $id)->first();
        return Response::json($post);
    }
}
