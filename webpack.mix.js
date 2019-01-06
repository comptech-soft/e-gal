const mix = require('laravel-mix');

mix.js('resources/js/Pages/Auth/Login/index.js', 'public/app-assets/js/login/index.js');
mix.js('resources/js/Pages/Auth/Welcome/index.js', 'public/app-assets/js/welcome/index.js');

mix.js('resources/js/Pages/Superadmin/Roles/index.js', 'public/app-assets/js/superadmin/roles/index.js');
mix.js('resources/js/Pages/Superadmin/Users/index.js', 'public/app-assets/js/superadmin/users/index.js');

// mix.js('resources/js/Pages/Superadmin/Locations/index.js', 'public/app-assets/js/superadmin/locations/index.js');