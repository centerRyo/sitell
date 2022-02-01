<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;

class RonbunController extends Controller
{
  public function index($id)
  {
    $ronbun = $this->getRonbun($id);

    return response()->json($ronbun);
  }

  public function getRonbun($id)
  {
    $ronbun = DB::table('ronbuns')
                ->where('ronbuns.id', $id)
                ->join('categories', 'ronbuns.category_id', '=', 'categories.id')
                ->select('ronbuns.*', 'categories.name as category_name')
                ->first();

    return $ronbun;
  }
}
