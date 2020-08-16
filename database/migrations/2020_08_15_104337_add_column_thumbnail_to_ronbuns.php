<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddColumnThumbnailToRonbuns extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('ronbuns', function (Blueprint $table) {
            $table->string('thumbnail')->nullable()->after('user_id')->comment('サムネイル画像');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('ronbuns', function (Blueprint $table) {
            $table->dropColumn('thumbnail');
        });
    }
}
