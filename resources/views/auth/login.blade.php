@extends('layouts.app')

@section('content')
<section class="form">
    <h2 class="form__title">{{ __('Login') }}</h2>

    <form class="form__container" action="{{ route('login') }}" method="post">
        @csrf
        <label for="email">{{ __('E-Mail Address') }}</label>
        <input id="email" type="text" name="email" class="@error('email') is-invalid @enderror" value="{{ old('email') }}" required autocomplete="email">

        @error('email')
            <div class="area-msg">
                {{ $message }}
            </div>
        @enderror

        <label for="password">{{ __('Password') }}</label>
        <input id="password" type="password" name="password" class="@error('password') is-invalid @enderror" required autocomplete="current-password">

        @error('password')
            <div class="area-msg">
                {{ $message }}
            </div>
        @enderror

        <input type="checkbox" name="remember" id="remember" {{ old('remember') ? 'checked' : '' }}>
        <label for="remember">{{ __('Remember Me') }}</label>

        <div class="btnContainer">
            <button type="submit" class="btn btn--right">{{ __('Login') }}</button>
        </div>

        @if (Route::has('password.request'))
            <a class="pass_remind" href="{{ route('password.request') }}">
                {{ __('Forgot Your Password?') }}
            </a>
        @endif
    </form>
</section>
@endsection
