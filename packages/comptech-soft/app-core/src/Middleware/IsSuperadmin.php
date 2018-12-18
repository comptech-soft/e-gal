<?php

namespace Comptechsoft\Appcore\Middleware;

use Closure;
use Sentinel;

class IsSuperadmin
{

    public function handle($request, Closure $next)
    {
        $user = Sentinel::check();
        if( $user )
        {
            if( $user->roles->count() == 0)
            {
                return redirect( route(config('comptechsoft.users.routes.welcome')) );
            }
            if( $user->roles->first()->slug != 'superadmin')
            {
                return redirect( route(config('comptechsoft.users.routes.welcome')) );
            }
            return $next($request);
        }
        return redirect( route(config('comptechsoft.users.routes.welcome')) );
    }

}
