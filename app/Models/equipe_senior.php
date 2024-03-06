<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Equipe_senior extends Model
{
    use HasFactory;

    //n-n avec joueurs

    //1-n avec actualites
    public function actualites() { // association N/N avec table article_tag
        return $this->hasMany(Actualite::class);
    }


    //1-n avec resultats
}
