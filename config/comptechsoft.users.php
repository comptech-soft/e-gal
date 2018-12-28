<?php

return [

    'login' => [
        'view' => 'Auth.Login.index'
    ],

    'routes' => [
        'welcome' => 'welcome',
    ],

    'user' => [
        'rules' => [
            'insert' => [
                'email' => 'required|email|unique:users,email',
                'first_name' => 'required',
                'last_name' => 'required',
                'password' => 'required'
            ],
            'update' => [
                'email' => 'required|email|unique:users,email',
                'first_name' => 'required',
                'last_name' => 'required',
            ],
            'delete' => [],
        ],

        'messages' =>[
            'email.required' => 'Adresa de email trebuie completată.',
            'email.email' => 'Adresa de email pare sa nu fie corectă.',
            'email.unique' => 'Adresa de email este deja folosită de un alt utilizator.',
            'first_name.required' => 'Prenumele trebuie completat.',
            'last_name.required' => 'Numele trebuie completat.',
            'password.required' => 'Trebuie să completați parola.'
        ]
    ],

    'role' => [
        'rules' => [
            'insert' => [
                'slug' => 'required|unique:roles,slug',
                'name' => 'required|unique:roles,name',
            ],
            'update' => [
                'slug' => 'required|unique:roles,slug',
                'name' => 'required|unique:roles,name',
            ],
            'delete' => [],
        ],

        'messages' =>[
            'slug.required' => 'Codul trebuie completat.',
            'slug.unique' => 'Acest cod este deja folosit.',
            'name.required' => 'Numele trebuie completat.',
            'name.unique' => 'Acest nume este deja folosit.',
        ]
    ]

];