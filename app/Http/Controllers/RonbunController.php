<?php

namespace App\Http\Controllers;

use App\Category;
use App\Ronbun;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class RonbunController extends Controller
{
    public function new()
    {
        $categories = Category::select('name')->get()->all();
        $category_names = [];
        foreach ($categories as $category) {
            $category_names[] = $category->name;
        }
        return view('ronbun.new', compact('category_names'));
    }

    public function create(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'category_id' => 'required',
            'author' => 'required|string|max:255',
            'abstract' => 'required',
        ]);

        $ronbun = new Ronbun();
        $ronbun->fill($request->all());
        $ronbun->user_id = Auth::user()->id;
        $ronbun->save();

        return redirect('/mypage')->with('flash_message', __('Registered!'));
    }
}
