<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AlterTableRoles extends Migration
{

    public function up()
    {
        Schema::table('roles', function (Blueprint $table) {
            $table->unique('name', 'roles_name_unique');
        });
    }

    public function down()
    {
        Schema::table('roles', function (Blueprint $table) {
            $table->dropUnique('roles_name_unique');
        });
    }
    
}
