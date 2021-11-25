<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Ronbun;

class RonbunController extends Controller
{
  public function index()
  {
    $ronbuns = $this->getLatestRonbuns();

    return response()->json($ronbuns);
  }

  public function getLatestRonbuns()
  {
    $ronbuns = new Ronbun;
    $latest_ronbuns = $ronbuns->orderBy('updated_at', 'desc')->limit(4)->get();

    return $latest_ronbuns;
  }
}
