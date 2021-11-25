<?php

use App\Ronbun;
use Illuminate\Database\Seeder;

class RonbunsTableSeeder extends Seeder
{
  public function run()
  {
    factory(Ronbun::class, 20)->create();
  }
}
