<?php

namespace Comptechsoft\Appcore\Controllers\Superadmin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class RolesController extends Controller
{
    public function index(Request $request)
    {
        return view(config('comptechsoft.core.roles.index.view'));
    }
}