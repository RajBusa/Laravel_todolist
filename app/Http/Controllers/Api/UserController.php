<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function register(Request $request){
        $validatedData = $request->validate([
            'name' => 'required',
            'email' => ['required', 'email'],
            'password' => ['min:8', 'confirmed']
        ]);
        $user = User::create([
            'name' => $validatedData["name"], 
            'email' => $validatedData["email"],
            'password' => Hash::make($validatedData["password"])
        ]);
        // echo "<pre>";
        // print_r($user) ;
        $token = $user->createToken("auth_token")->accessToken;
        // print_r($token);
        return response()->json(
        [
            'token' => $token
        ]);
    }

    public function login(Request $request){
        $validatedData = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);
        $user = User::where(['email' => $validatedData['email']])->first();

        if(!$user || !Hash::check($request->password, $user->password)){
            return response()->json([
                'message'=> 'Provided password is incorrect'
            ]);
        }

        $token = $user->createToken("auth_token")->accessToken;
        // print_r($token);
        return response()->json(
        [
            'token' => $token
        ]);
    }

    public function getUser($id){
        $user = User::find($id);
        // print_r($user);
        if(is_null($user)){
            return response()->json([
                'user' => null,
                'message' =>'User not found',
                'status' => 0     
            ]);
        } else {
            return response()->json([
                'user' => $user,
                'message' =>'User found',
                'status' => 1
            ]);
        }
    } 

    public function logout(Request $request){
        $request->user()->token()->revoke();

        return response([
            'message' => 'Logout successfully'
        ]);
    }
}
