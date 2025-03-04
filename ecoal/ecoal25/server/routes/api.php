<?php

use App\Models\Article;
use Illuminate\Http\Request;


use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UsersController;
use App\Http\Controllers\ArticlesController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/


Route::get('/articles', function () {
    return Article::all();
});


Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

Route::group([
    'middleware' => 'auth:sanctum',
], function () {
    Route::get('/logout',  [AuthController::class, 'logout']);

    Route::get('/user',  function (Request $request) {
        return $request->user();
    });
});

Route::post('/articles', function (Request $request) {
    return Article::create($request->all(
        'title',
        'content',
        'thumbnailURL',
        'mediaType',
        'mediaURL',
        'leadStory',
    ));
});



Route::apiResource("users", UsersController::class);
Route::apiResource("articles", ArticlesController::class);
