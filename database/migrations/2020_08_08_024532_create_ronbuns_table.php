<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRonbunsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ronbuns', function (Blueprint $table) {
            $table->bigIncrements('id')->comment('論文ID');
            $table->string('title', 255)->comment('論文タイトル');
            $table->string('author', 255)->comment('著者名');
            $table->integer('year')->nullable()->comment('出版年');
            $table->integer('category_id')->comment('カテゴリーID');
            $table->string('abstract', 5000)->comment('要約');
            $table->string('url', 255)->nullable()->comment('論文URL');
            $table->integer('user_id')->comment('ユーザーID');
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
        Schema::dropIfExists('ronbun');
    }
}
