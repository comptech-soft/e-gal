<?php

return [

    'left-sidebar' => [
        'generator' => 'Comptechsoft\Appcore\Navigation\Generator@makeSidebar'
    ],

    'roles' => [
        'index' => [
            'view' => 'Superadmin.Roles.index',
            'script' => config('app.url') . '/app-assets/js/superadmin/roles/index.js',
        ]
    ],

    'users' => [
        'index' => [
            'view' => 'Superadmin.Users.index',
            'script' => config('app.url') . '/app-assets/js/superadmin/users/index.js',
        ]
    ]

];