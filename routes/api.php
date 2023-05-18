<?php

use App\Http\Controllers\TodoListController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\UserController;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/posts', function (){
    return response() -> Json([
        'post' => [
            [
                'title' => 'Post Authentication'
            ]
        ]
    ]);
});




Route::post('/register', [UserController::class, 'register']);
Route::post('/login', [UserController::class, 'login']);
Route::middleware('auth:api')->group(function(){
    Route::get('/user/{id}', [UserController::class, 'getuser']);
    Route::get('/logout', [UserController::class, 'logout']);
    Route::resource('/list', TodoListController::class);
});