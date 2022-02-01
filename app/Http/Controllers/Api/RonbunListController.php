<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;

class RonbunListController extends Controller
{
  public function category($category_id)
  {
    $ronbunList = $this->getCategoryRonbunList($category_id);

    return response()->json($ronbunList);
  }

  public function getCategoryRonbunList($id)
  {
    $ronbunList = DB::table('ronbuns')
                    ->where('ronbuns.category_id', $id)
                    ->join('categories', 'ronbuns.category_id', '=', 'categories.id')
                    ->select('ronbuns.*', 'categories.name as category_name')
                    ->get();

      return $ronbunList;
  }
}
