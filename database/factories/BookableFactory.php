<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Bookable;
use Faker\Generator as Faker;
use Illuminate\Support\Arr;

$suffix = [
    'Villa',
    'Ház',
    'Kunyhó',
    'Luxus Villa',
    'Olcsó Ház',
    'Lakás',
    'Bérlakás',
    'Luxus Lakosztály',
    'Családi ház'
];

$factory->define(Bookable::class, function (Faker $faker) use ($suffix) {
    return [
        'title' => $faker->city . ' - ' . Arr::random($suffix),
        'description' => $faker->text()
    ];
});
