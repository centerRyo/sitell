<?php

namespace App\Http\Controllers;

use App\Job;
use App\Role;
use Illuminate\Http\Request;
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

    public function edit()
    {
        $jobs = Job::select('name')->get()->all();
        $job_names = [];
        foreach ($jobs as $job) {
            $job_names[] = $job->name;
        }

        $roles = Role::select('name')->get()->all();
        $role_names = [];
        foreach ($roles as $role) {
            $role_names[] = $role->name;
        }
        return view('user.edit', compact('job_names', 'role_names'));
    }

    public function update(Request $request)
    {
        $request->validate([
            'pic' => 'file|mimes:jpeg,png,jpg|max:2048'
        ]);

        $user = Auth::user();

        $file = $request->pic;
        $fileName = time() . '.' . $file->getClientOriginalExtension();
        $target_path = public_path('/uploads/');
        $file->move($target_path, $fileName);

        $user->fill($request->all())->save();
        $user->fill(['pic' => $fileName])->save();

        return redirect('/mypage')->with('flash_message', __('Updated!'));
    }

    public function withdraw()
    {
        return view('withdraw');
    }

    public function delete()
    {
        Auth::user()->delete();

        return redirect('/register');
    }
}
