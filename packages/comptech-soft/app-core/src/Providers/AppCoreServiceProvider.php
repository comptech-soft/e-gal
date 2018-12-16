<?php

namespace Comptechsoft\Appcore\Providers;

use Illuminate\Support\ServiceProvider;

class AppCoreServiceProvider extends ServiceProvider {

    public function boot() {

        /**
         * Se incarca rutele definite
         */
        $this->loadRoutesFrom(__DIR__ . '/../Routes/web.php');
    }

    public function register() {
       
    }
}
