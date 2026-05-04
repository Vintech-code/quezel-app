<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/auth/{path?}', function () {
    return view('welcome');
})->where('path', '.*');
