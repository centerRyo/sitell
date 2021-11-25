<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Ronbun;
use Faker\Generator as Faker;

$factory->define(Ronbun::class, function (Faker $faker) {
    return [
        'title' => $faker->title(),
        'author' => $faker->name(),
        'year' => $faker->year(),
        'category_id' => $faker->numberBetween($min = 1, $max = 10),
        'abstract' => $faker->text(),
        'url' => $faker->url(),
        'user_id' => $faker->numberBetween($min = 1, $max = 10),
        'thumbnail' => $faker->url(),
    ];
});
