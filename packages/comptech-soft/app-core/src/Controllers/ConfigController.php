<?php

namespace Comptechsoft\Appcore\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ConfigController extends Controller
{

    public function getConfig(Request $r) {
        return [
            'user' => $user = \Sentinel::check(),
            'role' => $user ? $user->roles()->first() : NULL,
            'config' => [
                'environment' => config('app.env'),
                'name' => config('app.name'),
                'locale' => $locale = config('app.locale'),
                'base_url' => config('app.url'),
                'timezone' => config('app.timezone'),
                'debug' => config('app.debug'),
                'version' => config('app.version'),
                'currency_symbol' => NULL, //Locale::getCurrencySymbol($locale),
                'digit_group_separator' => NULL, // Locale::getDigitGroupSeparator($locale),
                'decimal_character' => NULL, // Locale::getDecimalCharacter($locale),
                // 'localization' => config('localization'),
                's3' => config('filesystems.disks.s3'),
                'aws_url' => config('services.aws.url'),
            ],
        ];
    }

    public function getLeftSidebar(Request $r) {
        
        list($class, $method) = explode('@', config('comptechsoft.core.left-sidebar.generator'));
        return call_user_func([$class, $method], \Sentinel::check());
    }

}
