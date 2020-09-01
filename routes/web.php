<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/mypage', 'UserController@mypage')->name('mypage');
Route::get('/ronbun/new', 'RonbunController@new')->name('ronbun.new');
Route::post('/ronbun/new', 'RonbunController@create');
Route::get('/withdraw', 'UserController@withdraw')->name('withdraw');
Route::post('/withdraw', 'UserController@delete')->name('user.delete');
Route::get('/user/edit', 'UserController@edit')->name('user.edit');
Route::post('/user/edit', 'UserController@update')->name('user.update');
Route::post('/ronbun/{id}/delete', 'RonbunController@destroy')->name('ronbun.delete');
Route::get('/ronbun/{id}/edit', 'RonbunController@edit')->name('ronbun.edit');