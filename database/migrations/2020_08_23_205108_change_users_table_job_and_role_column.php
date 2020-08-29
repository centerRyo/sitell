<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class ChangeUsersTableJobAndRoleColumn extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->renameColumn('job', 'job_id');
            $table->renameColumn('role', 'role_id');
        });

        Schema::table('users', function (Blueprint $table) {
            $table->integer('job_id')->default(null)->comment('職業ID')->change();
            $table->integer('role_id')->default(null)->comment('職種ID')->change();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->string('job_id')->comment('職業')->change();
            $table->string('role_id')->comment('職種')->change();
        });

        Schema::table('users', function (Blueprint $table) {
            $table->renameColumn('job_id', 'job');
            $table->renameColumn('role_id', 'role');
        });
    }
}
