@extends('layouts.app')

@section('content')
  <div class="site-width">
    <h1 class="title">{{__('Edit Profile')}}</h1>

    {{ Form::open(['route' => 'user.update', 'class' => 'postForm mainContainer']) }}
      <div class="postForm__container">
        <div class="postForm__label">
          {{ Form::label('pic', 'アイコン画像')}}
        </div>
        {{ Form::file('pic')}}
        @error('pic')
          <div class="area-msg">
            {{ $message }}
          </div>
        @enderror
      </div>

      <div class="postForm__container">
        <div class="postForm__label">
          {{ Form::label('name', 'ユーザー名')}}
        </div>
        {{ Form::input('text', 'name', $user->name, ['class' => 'postForm__input']) }}
        @error('name')
          <div class="area-msg">
            {{ $message }}
          </div>
        @enderror
      </div>

      <div class="postForm__container">
        <div class="postForm__label">
          {{ Form::label('email', __('E-Mail Address')) }}
        </div>
        {{ Form::input('text', 'email', $user->email, ['class' => 'postForm__input'])}}
        @error('email')
          <div class="area-msg">
            {{ $message }}
          </div>
        @enderror
      </div>

      <div class="postForm__container">
        <div class="postForm__label">
          {{ Form::label('gender', __('gender')) }}
        </div>
        {{ Form::select('gender', ['男性', '女性', 'その他'], $user->gender, ['class' => 'postForm__select', 'placeholder' => '選択してください']) }}
        @error('gender')
          <div class="area-msg">
            {{ $message }}
          </div>
        @enderror
      </div>

      <div class="postForm__container">
        <div class="postForm__label">
          {{ Form::label('age', __('Age')) }}
        </div>
        {{ Form::selectRange('age', 1, 99, $user->age, ['class' => 'postForm__select', 'placeholder' => '指定しない'])}}
        @error('age')
          <div class="area-msg">
            {{ $message }}
          </div>
        @enderror
      </div>

      <div class="postForm__container">
        <div class="postForm__label">
          {{ Form::label('job_id', __('Job')) }}
        </div>
        {{ Form::select('job_id', $job_names, $user->job_id, ['class' => 'postForm__select', 'placeholder' => '指定しない']) }}
        @error('job_id')
          <div class="area-msg">
            {{ $message }}
          </div>
        @enderror
      </div>

      <div class="postForm__container">
        <div class="postForm__label">
          {{ Form::label('role_id', __('Role')) }}
        </div>
        {{ Form::select('role_id', $role_names, $user->role_id, ['class' => 'postForm__select', 'placeholder' => '指定しない']) }}
        @error('role_id')
          <div class="area-msg">
            {{ $message }}
          </div>
        @enderror
      </div>
      <div class="btnContainer">
        {{ Form::button( __('Update'), ['type' => 'submit', 'class' => 'btn btn--right']) }}
      </div>
    {{ Form::close() }}
    @include('sidebar_mypage')
  </div>
@endsection
