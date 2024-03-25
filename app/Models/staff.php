<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Staff extends Model
{
    use HasFactory;

    //1-n avec users
    public function user() { 
        return $this->belongsTo(User::class);
    }
}
