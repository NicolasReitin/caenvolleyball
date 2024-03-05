<?php

namespace App\Policies;

use App\Models\User;
use App\Models\equipe_senior;
use Illuminate\Auth\Access\Response;

class EquipeSeniorPolicy
{
    /**
     * Determine whether the user can view any models.
     */
    public function viewAny(User $user): bool
    {
        //
    }

    /**
     * Determine whether the user can view the model.
     */
    public function view(User $user, equipe_senior $equipeSenior): bool
    {
        //
    }

    /**
     * Determine whether the user can create models.
     */
    public function create(User $user): bool
    {
        //
    }

    /**
     * Determine whether the user can update the model.
     */
    public function update(User $user, equipe_senior $equipeSenior): bool
    {
        //
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(User $user, equipe_senior $equipeSenior): bool
    {
        //
    }

    /**
     * Determine whether the user can restore the model.
     */
    public function restore(User $user, equipe_senior $equipeSenior): bool
    {
        //
    }

    /**
     * Determine whether the user can permanently delete the model.
     */
    public function forceDelete(User $user, equipe_senior $equipeSenior): bool
    {
        //
    }
}
