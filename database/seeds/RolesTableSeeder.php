<?php

use Illuminate\Database\Seeder;
use Comptechsoft\Usermanagement\Models\Roles\Role;

class RolesTableSeeder extends Seeder
{
    protected $roles = [
        [
            'slug' => 'superadmin',
            'name' => 'Superadmin'
        ],
        [
            'slug' => 'user',
            'name' => 'User'
        ],
    ];

    public function run() {
        
        foreach($this->roles as $role) {

            if( ! \Sentinel::findRoleBySlug($role['slug']) )
            {
                Role::create($role);
            }
        }
    }
}
