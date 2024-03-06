<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Resultat extends Model
{
    use HasFactory;

    //1-n avec equipe_seniors
    public function equipe_senior() { // association N/N avec table article_tag
        return $this->belongsTo(Equipe_senior::class);
    }
    //1-n avec equipe_jeunes
    public function equipe_jeune() { // association N/N avec table article_tag
        return $this->belongsTo(Equipe_jeune::class);
    }
    //1-n avec equipes_adverses
    public function equipe_adverse() { // association N/N avec table article_tag
        return $this->belongsTo(Equipe_adverse::class);
    }
}
