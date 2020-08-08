<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->bigIncrements('id')->comment('ユーザーID');
            $table->string('name')->nullable()->comment('ユーザー名');
            $table->string('email', 255)->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password', 255);
            $table->integer('gender')->nullable()->comment('男性：0 女性：1 その他：2');
            $table->integer('age')->nullable()->comment('年齢');
            $table->string('job', 255)->nullable()->comment('職業');
            $table->string('role', 255)->nullable()->comment('職種');
            $table->string('pic', 255)->nullable()->comment('アイコン画像');
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
