<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Staff extends Model
{
    use HasFactory;

    //1-n avec users
    public function user() { // association N/N avec table article_tag
        return $this->belongsTo(User::class);
    }
}
