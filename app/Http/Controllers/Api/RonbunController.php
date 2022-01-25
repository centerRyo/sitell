<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Ronbun;
use Illuminate\Support\Facades\DB;

class RonbunController extends Controller
{
  public function index()
  {
    $ronbuns = $this->getLatestRonbuns();

    return response()->json($ronbuns);
  }

  public function show($id)
  {
    $ronbun = $this->getRonbun($id);

    return response()->json($ronbun);
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
