<?php

use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AddCoronaToCategoriesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('categories')->insert([
            'id' => 26,
            'name' => '新型コロナウイルス',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
        ]);
    }
}
