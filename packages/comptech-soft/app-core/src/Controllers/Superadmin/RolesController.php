<?php

namespace Comptechsoft\Appcore\Controllers\Superadmin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Comptechsoft\Usermanagement\Models\Roles\Role;

class RolesController extends Controller
{
    public function index(Request $request) {
        return view(config('comptechsoft.core.roles.index.view'));
    }

    public function getRecords(Request $request) {
        return Role::getRecords($request->all());
    }
}