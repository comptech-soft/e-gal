<?php

return [

    'left-sidebar' => [
        'generator' => 'Comptechsoft\Appcore\Navigation\Generator@makeSidebar'
    ],

    'roles' => [
        'index' => [
            'view' => 'Superadmin.Roles.index'
        ]
    ],

    'users' => [
        'index' => [
            'view' => 'Superadmin.Users.index'
        ]
    ]

];