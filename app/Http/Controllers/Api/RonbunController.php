<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class RonbunController extends Controller
{
  public function index($id)
  {
    $ronbun = $this->getRonbun($id);

    return response()->json($ronbun);
  }

  public function getRonbun($id)
  {
    // DBコネクションが走るのでこの判定方法はあまり良くない
    // if (!DB::table('ronbuns')->where('id', $id)->exists()) {
    // }

    $ronbun = DB::table('ronbuns')
                ->where('ronbuns.id', $id)
                ->join('categories', 'ronbuns.category_id', '=', 'categories.id')
                ->select('ronbuns.*', 'categories.name as category_name')
                ->first();

    if (empty($ronbun)) {
      throw new NotFoundHttpException('ronbun does not exist');
    }

    return $ronbun;
  }
}
