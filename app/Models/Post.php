<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;

    protected $fillable = ['content', 'title'];

    public $timestamps = false;

    public function post_images()
    {
        return $this->hasMany(PostImage::class);
    }

    public function thumbnail_image(){
        return $this->hasOne(PostImage::class);
    }
}
