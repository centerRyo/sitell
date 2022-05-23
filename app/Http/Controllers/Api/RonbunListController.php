<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;

class RonbunListController extends Controller
{
  public function index()
  {
    $ronbunList = $this->getLatestRonbunList();

    return response()->json($ronbunList);
  }

  public function category($category_id)
  {
    $ronbunList = $this->getCategoryRonbunList($category_id);

    return response()->json($ronbunList);
  }

  public function getLatestRonbunList()
  {
    $ronbunList = DB::table('ronbuns')
                    ->join('categories', 'ronbuns.category_id', '=', 'categories.id')
                    ->select('ronbuns.id', 'ronbuns.title', 'ronbuns.thumbnail', 'categories.name as category_name')
                    ->orderBy('ronbuns.updated_at', 'desc')
                    ->get();

    return $ronbunList;
  }

  public function getCategoryRonbunList($id)
  {
    $ronbunList = DB::table('ronbuns')
                    ->where('ronbuns.category_id', $id)
                    ->join('categories', 'ronbuns.category_id', '=', 'categories.id')
                    ->select('ronbuns.id', 'ronbuns.title', 'ronbuns.thumbnail', 'categories.name as category_name')
                    ->get();

      return $ronbunList;
  }
}
