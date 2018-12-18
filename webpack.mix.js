const mix = require('laravel-mix');

mix.js('resources/js/Login/index.js', 'public/app-assets/js/login/index.js');

mix.js('resources/js/Welcome/index.js', 'public/app-assets/js/welcome/index.js');

mix.js('resources/js/Superadmin/Roles/index.js', 'public/app-assets/js/superadmin/roles/index.js');
mix.js('resources/js/Superadmin/Users/index.js', 'public/app-assets/js/superadmin/users/index.js');