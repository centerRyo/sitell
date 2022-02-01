<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
  return $request->user();
});

Route::group(['middleware' => ['api']], function() {
  // Top
  Route::prefix('top')->group(function() {
    Route::get('/latestList', 'Api\TopController@latest');
    Route::get('/category/categoryList', 'Api\TopController@category');
  });

  // 一覧
  Route::get('/latestList', 'Api\RonbunListController@index');

  Route::post('/ronbun/{id}', 'Api\RonbunController@index');
  Route::post('/category/{category_id}/ronbunList', 'Api\RonbunListController@category');
});
