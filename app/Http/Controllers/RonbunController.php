<?php

namespace App\Http\Controllers;

use App\Category;
use App\Ronbun;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class RonbunController extends Controller
{
    public function index()
    {
        $ronbuns = DB::table('ronbuns')
                        ->leftJoin('categories', 'ronbuns.category_id', '=', 'categories.id')
                        ->select('ronbuns.*', 'categories.name as category_name')
                        ->limit(12)
                        ->orderBy('ronbuns.updated_at', 'desc')
                        ->get();

        // TODO: お気に入りテーブルとjoinをしてお気に入り件数が高いもの5件を表示するようにする
        $pickup_ronbuns = DB::table('ronbuns')
                                ->limit(5)
                                ->orderBy('updated_at', 'desc')
                                ->get();

        $categories = Category::all();
        return view('ronbun.index', compact('ronbuns', 'pickup_ronbuns', 'categories'));
    }

    public function latest()
    {       
        $ronbuns = DB::table('ronbuns')
                        ->leftJoin('categories', 'ronbuns.category_id', '=', 'categories.id')
                        ->select('ronbuns.*', 'categories.name as category_name')
                        ->orderBy('ronbuns.updated_at', 'desc')
                        ->paginate(24);
                        // ->get();
        
        // TODO: お気に入りテーブルとjoinをしてお気に入り件数が高いもの5件を表示するようにする
        $pickup_ronbuns = DB::table('ronbuns')
                                ->limit(5)
                                ->orderBy('updated_at', 'desc')
                                ->get();

        $categories = Category::all();

        return view('ronbun.latest', compact('ronbuns', 'pickup_ronbuns', 'categories'));
    }

    public function show($id)
    {
        if (!ctype_digit($id)) {
            return redirect('/')->with('flash_message', __('Invalid operation was performed.'));
        }

        $ronbun = Ronbun::find($id);

        // TODO: お気に入りテーブルとjoinをしてお気に入り件数が高いもの5件を表示するようにする
        $pickup_ronbuns = DB::table('ronbuns')
                                ->limit(5)
                                ->orderBy('updated_at', 'desc')
                                ->get();

        $categories = Category::all();

        return view('ronbun.show', compact('ronbun', 'pickup_ronbuns', 'categories'));
    }

    public function category($id)
    {
        if (!ctype_digit($id)) {
            return redirect('/')->with('flash_message', __('Invalid operation was performed.'));
        }

        $ronbuns = Ronbun::whereHas('category', function($query) use ($id) {
            $query->where('id', $id);
        })->paginate(24);

        // TODO: お気に入りテーブルとjoinをしてお気に入り件数が高いもの5件を表示するようにする
        $pickup_ronbuns = DB::table('ronbuns')
                                ->limit(5)
                                ->orderBy('updated_at', 'desc')
                                ->get();

        $categories = Category::all();

        $category = Category::find($id);

        return view('ronbun.category', compact('ronbuns', 'pickup_ronbuns', 'categories', 'category'));
    }

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
            'thumbnail' => 'file|mimes:jpeg,png,jpg|max:2048',
        ]);

        $ronbun = new Ronbun();
        $ronbun->fill($request->all());
        $ronbun->user_id = Auth::user()->id;
        $ronbun->save();
        
        // 画像データは別で上書き保存する
        if (isset($request->thumbnail)) {
            $file = $request->thumbnail;
            $fileName = time() . '.' . $file->getClientOriginalExtension();
            $target_path = public_path('/uploads/');
            $file->move($target_path, $fileName);
            $ronbun->fill(['thumbnail' => $fileName])->save();
        }

        return redirect('/mypage')->with('flash_message', __('Registered!'));
    }

    public function edit($id)
    {
        if (!ctype_digit($id)) {
            return redirect('/mypage')->with('flash_message', __('Invalid operation was performed.'));
        }
        $categories = Category::select('id', 'name')->get()->all();
        $category_names = [];
        foreach ($categories as $category) {
            $category_names[$category->id] = $category->name;
        }

        $ronbun = Ronbun::find($id);
        return view('ronbun.edit', compact('ronbun', 'category_names'));
    }

    public function update(Request $request, $id)
    {
        if (!ctype_digit($id)) {
            return redirect('/mypage')->with('flash_message', __('Invalid operation was performed.'));
        }

        $ronbun = Ronbun::find($id);
        $ronbun->fill($request->all());
        $ronbun->user_id = Auth::user()->id;
        $ronbun->save();
        
        // 画像データは別で上書き保存する
        if (isset($request->thumbnail)) {
            $file = $request->thumbnail;
            $fileName = time() . '.' . $file->getClientOriginalExtension();
            $target_path = public_path('/uploads/');
            $file->move($target_path, $fileName);
            $ronbun->fill(['thumbnail' => $fileName])->save();
        }

        return redirect('/mypage')->with('flash_message', __('Updated!'));
    }

    public function destroy($id)
    {
        if (!ctype_digit($id)) {
            return redirect('/mypage')->with('flash_message', __('Invalid operation was performed.'));
        }

        Ronbun::find($id)->delete();

        return redirect('/mypage')->with('flash_message', __('Deleted.'));
    }
}
