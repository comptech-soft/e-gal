<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateGeolocationsTable extends Migration
{

    public function up()
    {
        Schema::create('geo-locations', function(Blueprint $table) {
            $table->increments('id');
      
            $table->integer('parent_id')->nullable();
            $table->integer('lft')->nullable();
            $table->integer('rgt')->nullable();
            $table->integer('depth')->nullable();
      
            $table->string('name', 191);
            $table->string('type', 16); // country, city, region, ....
            $table->text('infos')->nullable();
      
            $table->timestamps();
        });
    }


    public function down()
    {
        Schema::drop('geo-locations');
    }
}
