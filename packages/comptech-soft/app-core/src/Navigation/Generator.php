<?php

namespace Comptechsoft\Appcore\Navigation;

class Generator {

    public static function makeSidebarByUser($user) {

        $menu = new Navigation(NULL, NULL, NULL);

        /**
         * NU avem user cu un rol
         */
        if( ! $user ) {

            $menu->addOption('login', new Navigation('Login', 'la la-sign-in', 'login'));
            return $menu;
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