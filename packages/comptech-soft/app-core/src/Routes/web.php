<?php

Route::middleware('web')->group(function(){

    Route::namespace('Comptechsoft\Appcore\Controllers')->group(function(){

        Route::post('get-app-configs', 'ConfigController@getConfig');
        Route::post('get-left-sidebar', 'ConfigController@getLeftSidebar');

        /*
        | neautentificati
        */
        Route::middleware(['is-unauthenticated'])->group(function(){
        });

        /*
        | autentificati
        */
        Route::middleware(['is-authenticated'])->group(function(){

            Route::middleware(['is-superadmin'])->prefix('superadmin')->namespace('Superadmin')->group(function(){
                Route::get('roles', 'RolesController@index')->name('roles-index');
                Route::get('users', 'UsersController@index')->name('users-index');
            });

        });

    });    
});
   