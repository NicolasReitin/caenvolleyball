<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Actualite;
use App\Http\Requests\StoreactualiteRequest;
use App\Http\Requests\UpdateactualiteRequest;

class ActualiteController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $actualites = Actualite::latest()->simplePaginate(9);
        // dd($actualites);
        return Inertia::render('Actualites/index', ['actualites' => $actualites]);
        
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreactualiteRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(actualite $actualite)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(actualite $actualite)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateactualiteRequest $request, actualite $actualite)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(actualite $actualite)
    {
        //
    }
}
