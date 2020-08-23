<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function mypage()
    {
        $ronbuns = Auth::user()->ronbuns()->get();
        return view('mypage', compact('ronbuns'));
    }

    public function withdraw()
    {
        return view('withdraw');
    }

    public function delete()
    {
        Auth::user()->delete();

        return redirect('/login');
    }
}
