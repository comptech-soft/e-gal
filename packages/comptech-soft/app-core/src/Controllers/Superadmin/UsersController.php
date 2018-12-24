<?php

namespace Comptechsoft\Appcore\Controllers\Superadmin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Comptechsoft\Usermanagement\Models\Users\User;

class UsersController extends Controller
{
    public function index(Request $request)
    {
        $view = config('comptechsoft.core.users.index.view');
        $script = config('comptechsoft.core.users.index.script');
        return view($view )->withScript($script);
    }

    public function getRecords(Request $request) {
        return User::getRecords($request->all());
    }

    public function actionDispatch($action, Request $request) {
        return User::actionDispatch($action, $request->all());
    }
}