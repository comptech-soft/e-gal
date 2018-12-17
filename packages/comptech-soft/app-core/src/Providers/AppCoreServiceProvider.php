<?php

namespace Comptechsoft\Appcore\Providers;

use Illuminate\Support\ServiceProvider;

class AppCoreServiceProvider extends ServiceProvider {

    public function boot() {

        /**
         * Se incarca rutele definite
         */
        $this->loadRoutesFrom(__DIR__ . '/../Routes/web.php');

        /**
         * Fisierul de configurare
         */
        $this->publishes([
            __DIR__ . '/../Config/comptechsoft.core.php' => config_path('comptechsoft.core.php'),
        ]);
    }

    public function register() {
       
    }
}
