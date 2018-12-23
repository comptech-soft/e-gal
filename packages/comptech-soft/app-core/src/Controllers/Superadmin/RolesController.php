<?php

namespace Comptechsoft\Appcore\Controllers\Superadmin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Comptechsoft\Usermanagement\Models\Roles\Role;

class RolesController extends Controller
{
    public function index(Request $request) {
        $view = config('comptechsoft.core.roles.index.view');
        $script = config('comptechsoft.core.roles.index.script');
        return view($view )->withScript($script);
    }

    public function getRecords(Request $request) {
        return Role::getRecords($request->all());
    }
}