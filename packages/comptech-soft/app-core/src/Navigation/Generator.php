<?php

namespace Comptechsoft\Appcore\Navigation;

class Generator {

    public static function makeUsersOptions($user, $menu) {

        $result = new Navigation('Users', 'la la-users', NULL);
        $result->addOption('roles', new Navigation('Roluri', 'la la-file-text', 'roles'));
        $result->addOption('users', new Navigation('Utilizatori', 'la la-users', 'users'));
        return $result;

    }

    public static function makesuparadminSidebar($user, $menu) {
        $menu->addOption('users', self::makeUsersOptions($user, $menu) );
        return $menu;
    }

    public static function makeSidebarByUser($user) {

        $menu = new Navigation(NULL, NULL, NULL);

        /**
         * Nu avem user
         */
        if( ! $user ) {

            $menu->addOption('login', new Navigation('Login', 'la la-sign-in', 'login'));
            return $menu;
        }

        /**
         * Avem user. Nu avem rol
         */
        if(! $user->roles->count())
        {

        }
        else
        {
            $method = 'make' . $user->roles->first()->slug .  'Sidebar';
            $menu = call_user_func([__CLASS__, $method], $user, $menu);
        }
        $menu->addOption('logout', new Navigation('Logout', 'la la-sign-out', 'logout'));
        return $menu;
    }

    public static function makeSidebar($user) {

        return [
            'user' => $user,
            'roles' => $roles = ($user ? $user->roles : NULL),
            'sidebar' => self::makeSidebarByUser($user),
        ];
    }
}