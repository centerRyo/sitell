<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Ronbun extends Model
{
    protected $fillable = ['title', 'author', 'category_id', 'year', 'abstract', 'url', 'thumbnail', 'user_id'];

    public function user()
    {
        return $this->belongsTo('App\User');
    }
}
