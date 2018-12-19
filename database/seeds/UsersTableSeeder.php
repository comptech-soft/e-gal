<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    
    protected $superadmins = [
        [
            'email'    => 'ovidiu.andrus@comptech.ro',
            'password' => 'babalean',
            'first_name' => 'Andruș',
            'last_name' => 'Ovidiu',
        ],
        [
            'email'    => 'calin.verdes@comptech.ro',
            'password' => 'babalean',
            'first_name' => 'Verdeș',
            'last_name' => 'Călin',
        ],
    ];

    protected function CreateUser($role_slug, $credentials, $activated = true) {
        try
        {
            $role = \Sentinel::findRoleBySlug($role_slug);
            if( $activated)
            {
                $user = \Sentinel::registerAndActivate($credentials);
            }
            else 
            {
                $user = \Sentinel::register($credentials);
            }
            $role->users()->attach($user);
        }
        catch(\Exception $e)
        {
        }
    } 

    protected function SeedActivatedUsers($count) {
        $faker = \Faker\Factory::create();

        for($i = 0; $i < $count; $i++) {

            $this->CreateUser('user', [
                'email'    => $faker->email,
                'password' => 'babalean',
                'first_name' => $faker->firstName,
                'last_name' => $faker->lastName,
            ]);
        }
    }

    protected function SeedUnActivatedUsers($count) {
        $faker = \Faker\Factory::create();

        for($i = 0; $i < $count; $i++) {

            $this->CreateUser('user', [
                'email'    => $faker->email,
                'password' => 'babalean',
                'first_name' => $faker->firstName,
                'last_name' => $faker->lastName,
            ], false);
        }
    }

    public function run() {
        
        foreach($this->superadmins as $i => $credentials) {
            $this->CreateUser('superadmin', $credentials);
        }

        $this->SeedActivatedUsers(100);
        $this->SeedUnActivatedUsers(100);
    }
}
