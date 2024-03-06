<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Client extends Model
{
    use HasFactory;

    //1-n avec commandes
    public function commandes() { // association N/N avec table article_tag
        return $this->hasMany(Commande::class);
    }
}
