<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AlterTableRoleUsers extends Migration
{
    public function up()
    {
        Schema::table('role_users', function (Blueprint $table) {
            $table->unique(['user_id', 'role_id'], 'role_users_unique');

            $table
                ->foreign('user_id')
                ->references('id')
                ->on('users')
                ->onUpdate('cascade')
                ->onDelete('cascade')
            ;

            $table
                ->foreign('role_id')
                ->references('id')
                ->on('roles')
                ->onUpdate('cascade')
                ->onDelete('cascade')
            ;
        });
    }

    public function down()
    {
        Schema::table('role_users', function (Blueprint $table) {
            $table->dropUnique('role_users_unique');
            $table->dropForeign('role_users_role_id_foreign');
            $table->dropForeign('role_users_user_id_foreign');
        });
    }
}
