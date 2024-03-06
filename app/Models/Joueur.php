<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Joueur extends Model
{
    use HasFactory;

    //n-n avec equipe_seniors
    public function equipe_seniors() { // association N/N avec table article_tag
        return $this->belongsToMany(Equipe_senior::class);
    }

    //n-n avec equipe_jeunes
    public function equipe_jeunes() { // association N/N avec table article_tag
        return $this->belongsToMany(Equipe_jeune::class);
    }
}
