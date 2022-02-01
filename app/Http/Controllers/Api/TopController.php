<?php

namespace App\Http\Controllers\Api;

use App\Category;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;

class TopController extends Controller
{
  public function latest()
  {
    $ronbuns = $this->getLatestRonbuns();

    return response()->json($ronbuns);
  }

  public function category()
  {
      $categories = Category::get(['id', 'name']);
      return response()->json($categories);
  }

  public function getLatestRonbuns()
  {
    $latest_ronbuns = DB::table('ronbuns')
                          ->leftJoin('categories', 'ronbuns.category_id', '=', 'categories.id')
                          ->select('ronbuns.*', 'categories.name as category_name')
                          ->orderBy('ronbuns.updated_at', 'desc')
                          ->limit(4)
                          ->get();

    return $latest_ronbuns;
  }
}
