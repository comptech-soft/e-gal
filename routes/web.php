<?php

/**
 * Pagina home. Poate avem, poate nu avem user
 */
Route::get('/', 'WelcomeController@index')->name('welcome');
