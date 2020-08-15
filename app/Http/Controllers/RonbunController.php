<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class RonbunController extends Controller
{
    public function new()
    {
        return view('ronbun.new');
    }
}
