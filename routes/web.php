<?php

use App\Http\Controllers\ActualiteController;
use App\Http\Controllers\ProfileController;
use App\Models\Actualite;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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


Route::get('/actualites', [ActualiteController::class, 'index'])->name('actu.index');
Route::get('/actualite/{actu}', [ActualiteController::class, 'index'])->name('actu.show');



/*
Route::get('/events', [EventController::class, 'index'])->name('event.index');
Route::get('/event/{event}', [EventController::class, 'show'])->name('event.show');
Route::get('/event/create/{event}', [EventController::class, 'create'])->name('event.create');
Route::post('/event/store', [EventController::class, 'store'])->name('event.store');
Route::get('/event/booking/success/{eventId}', function ($eventId) {
    $event = Event::with('artists', 'showroom')
    ->find($eventId);
    return Inertia::render('event/Success', ['event' => $event]);
})->name('event.success');
Route::get('/event/booking/error/{eventId}', function ($eventId) {
    $event = Event::with('artists', 'showroom')
    ->find($eventId);
    return Inertia::render('event/Error', ['event' => $event]);
}) ->name('event.error');
*/

require __DIR__.'/auth.php';
