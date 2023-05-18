<?php

namespace App\Http\Controllers;

use App\Models\TodoList;
use Exception;
use Illuminate\Http\Request;

class   TodoListController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $user_id = auth('api')->user()->id;
        $todo_list = TodoList::where('user_id', $user_id)->get();
        return response()->json($todo_list);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        TodoList::create([
            'title' => $request->title,
            'start_time' => $request->start_time,
            'end_time' => $request->end_time,
            'user_id' => auth('api')->user()->id
        ]);
        return response()->json('successfully created');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $todolist = TodoList::findOrFail($id);
        if($todolist->user_id == auth('api')->user()->id){
            $todolist->update([
                'start_time' => $request->start_time,
                'end_time' => $request->end_time,
                'title' => $request->title  
            ]);
            return response()->json('successfully updated');
        }
        return response()->json('some error exists');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(int $id)
    {       
        // dd($id);
        $todolist = TodoList::find($id);
        // return response()->json($todolist);
        // dd($todolist);
        if($todolist){
            if($todolist->user_id == auth('api')->user()->id){
                $todo = TodoList::where('id',$id)->delete();
                return response()->json('successfully deleted');
            } else {
                return response()->json('some error exists');
            }
        }
        else{
            return response()->json('List not found');
        }
    }
}
