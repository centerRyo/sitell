@extends('layouts.app')

@section('content')
<section class="form">
    <h2 class="form__title">{{ __('Reset Password') }}</h2>
    <form action="{{ route('password.update') }}" class="form__container">
        @csrf

        <input type="hidden" name="token" value="{{ $token }}">

        <label for="email">{{ __('E-Mail Address') }}</label>
        <input id="email" type="text" class="@error('email') is-invalid @enderror" name="email" value="{{ $email ?? old('email') }}" required autocomplete="email">

        @error('email')
            <div class="area-msg">
                {{ $message }}
            </div>
        @enderror

        <label for="password">{{ __('Password') }}</label><span class="addtional">(※8文字以上)</span>
        <input type="password" id="password" class="@error('password') is-invalid @enderror" name="password" required autocomplete="new-password">

        @error('password')
            <div class="area-msg">
                {{ $message }}
            </div>
        @enderror

        <label for="password-confirm">{{ __('Confirm Password') }}</label>
        <input type="password" id="password-confirm" name="password_confirmation" required autocomplete="new-password">

        <div class="btnContainer">
            <button type="submit" class="btn btn--right">{{ __('Reset Password') }}</button>
        </div>
    </form>
</section>
@endsection
