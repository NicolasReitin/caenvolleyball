<?php

use Inertia\Inertia;
use App\Models\Actualite;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ActualiteController;
use App\Http\Controllers\EquipeSeniorController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    $firstActu = Actualite::latest('created_at')->first();
    $latestActus  = Actualite::latest('created_at')->take(6)->get();
    $othersActu = $latestActus->skip(1); // Pour sauter la dernière actualité
    // dd($actualites);
    return Inertia::render('Welcome', [
        'firstActu' => $firstActu,
        'othersActu' => $othersActu,
        // 'canLogin' => Route::has('login'),
        // 'canRegister' => Route::has('register'),
    ]);
})->name('welcome');

Route::get('/cvb-admin', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

// ----------------------------- Actualités ----------------------------------------
Route::get('/actualites', [ActualiteController::class, 'index'])->name('actu.index');
Route::get('/actualite/{actu}', [ActualiteController::class, 'show'])->name('actu.show');

// ----------------------------- Equipes ----------------------------------------
Route::get('/equipe/{equipe_id}', [EquipeSeniorController::class, 'index'])->name('equipe.index');




// ----------------------------- Divers ----------------------------------------
Route::get('/projet', function () {
    return Inertia::render('Divers/Projet');
})->name('projet');
Route::get('/planning', function () {
    return Inertia::render('Divers/Planning');
})->name('planning');
Route::get('/organigramme', function () {
    return Inertia::render('Divers/Organigramme');
})->name('organigramme');
Route::get('/historique', function () {
    return Inertia::render('Divers/Historique');
})->name('historique');
Route::get('/reglement', function () {
    return Inertia::render('Divers/Reglement');
})->name('reglement');
Route::get('/statuts', function () {
    return Inertia::render('Divers/Statuts');
})->name('statuts');
Route::get('/tarifs', function () {
    return Inertia::render('Divers/Tarifs');
})->name('tarifs');



require __DIR__.'/auth.php';
