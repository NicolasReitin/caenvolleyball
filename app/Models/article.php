<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    use HasFactory;

    // 1-n avec lignes_commandes
    public function ligne_commandes() { // association N/N avec table article_tag
        return $this->hasMany(Lignes_commande::class);
    }
}
