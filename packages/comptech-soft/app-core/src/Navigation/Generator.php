<?php

namespace Comptechsoft\Appcore\Navigation;

class Generator {

    public static function makeSidebarByUser($user) {

        $menu = new Navigation(NULL, NULL, NULL);

        /**
         * NU avem user cu un rol
         */
        if( ! $user ) {

            $menu->addOption('login', new Navigation('Login', 'la la-key', 'login'));
            return $menu;
        }
    }

    public static function makeSidebar($user) {

        return [
            'user' => $user,
            'roles' => $roles = ($user ? $user->roles : NULL),
            'sidebar' => self::makeSidebarByUser($user),
        ];
    }
}