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

    //n-n avec equipeSenior
    public function equipeSenior() { 
        return $this->belongsToMany(Equipe_senior::class, 'equipe_seniors');
    }

    //n-n avec equipeJunior
    public function equipeJunior() { 
        return $this->belongsToMany(Equipe_jeune::class, 'equipe_juniors');
    }


}
