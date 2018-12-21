<?php

namespace Comptechsoft\Appcore\Controllers\Superadmin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Comptechsoft\Usermanagement\Models\Users\User;

class UsersController extends Controller
{
    public function index(Request $request)
    {
        return view(config('comptechsoft.core.users.index.view'));
    }

    public function getRecords(Request $request) {
        return User::getRecords($request->all());
    }
}