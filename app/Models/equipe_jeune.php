<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Equipe_jeune extends Model
{
    use HasFactory;

    //n-n avec joueurs
    public function joueurs() { // association N/N avec table article_tag
        return $this->belongsToMany(Joueur::class);
    }

    //1-n avec actualites
    public function actualites() { // association N/N avec table article_tag
        return $this->hasMany(Actualite::class);
    }

    //1-n avec resultats
    public function resultats() { // association N/N avec table article_tag
        return $this->hasMany(Resultat::class);
    }
}
