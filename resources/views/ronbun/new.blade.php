@extends('layouts.app')

@section('content')
  <div class="site-width">
    <h1 class="title">{{__('Register Ronbun')}}</h1>

    {{ Form::open(['route' => 'ronbun.new', 'class' => 'postForm mainContainer']) }}
      <div class="postForm__container">
        <div class="postForm__label">
          {{ Form::label('title', __('Title'))}}
          <span class="postForm__label--must">{{ __('Required') }}</span>
        </div>
        {{ Form::input('text', 'title', old('title'), ['class' => 'postForm__input']) }}
        @error('title')
          <div class="area-msg">
            {{ $message }}
          </div>
        @enderror
      </div>

      <div class="postForm__container">
        <div class="postForm__label">
          {{ Form::label('category_id', __('Category')) }}
          <span class="postForm__label--must">{{ __('Required') }}</span>
        </div>
        {{ Form::select('category_id', $category_names, null, ['class' => 'postForm__select', 'placeholder' => '選択してください']) }}
        @error('category_id')
          <div class="area-msg">
            {{ $message }}
          </div>
        @enderror
      </div>

      <div class="postForm__container">
        <div class="postForm__label">
          {{ Form::label('author', __('Author')) }}
          <span class="postForm__label--must">{{ __('Required') }}</span>
        </div>
        {{ Form::input('text', 'author', old('author'), ['class' => 'postForm__input']) }}
        @error('author')
          <div class="area-msg">
            {{ $message }}
          </div>
        @enderror
      </div>

      <div class="postForm__container">
        <div class="postForm__label">
          {{ Form::label('year', __('Year')) }}
        </div>
        {{ Form::input('number', 'year', old('year'), ['class' => 'postForm__input--number']) }}
        @error('year')
          <div class="area-msg">
            {{ $message }}
          </div>
        @enderror
      </div>

      <div class="postForm__container">
        <div class="postForm__label">
          {{ Form::label('abstract', __('Abstract')) }}
          <span class="postForm__label--must">{{ __('Required') }}</span>
        </div>
        {{ Form::textarea('abstract', old('abstract'), ['id' => 'ckeditor', 'class' => 'postForm__textarea'])}}
        @error('abstract')
          <div class="area-msg">
            {{ $message }}
          </div>
        @enderror
      </div>

      <div class="postForm__container">
        <div class="postForm__label">
          {{ Form::label('url', __('Original URL')) }}
        </div>
        {{ Form::input('text', 'url', old('url'), ['class' => 'postForm__input']) }}
        @error('url')
          <div class="area-msg">
            {{ $message }}
          </div>
        @enderror
      </div>

      <div class="postForm__container">
        <div class="postForm__label">
          {{ Form::label('thumbnail', __('Thumbnail')) }}
        </div>
        {{ Form::file('thumbnail') }}
        @error('thumbnail')
          <div class="area-msg">
            {{ $message }}
          </div>
        @enderror
      </div>

      <div class="btnContainer">
        {{ Form::button( __('Register'), ['type' => 'submit', 'class' => 'btn btn--right']) }}
      </div>
    {{ Form::close() }}
    @include('sidebar_mypage')
  </div>
  <script>
        CKEDITOR.replace('ckeditor');
    </script>
@endsection
