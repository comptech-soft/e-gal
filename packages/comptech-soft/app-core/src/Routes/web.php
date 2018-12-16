<?php


Route::middleware('web')->group(function(){

    Route::namespace('Comptechsoft\Appcore\Controllers')->group(function(){

        Route::post('get-app-configs', 'ConfigController@getConfig');

    });    
});