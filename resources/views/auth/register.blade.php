@extends('layouts.app')

@section('content')
<section class="form">
    <h2 class="form__title">{{ __('Register') }}</h2>

    <form action="{{ route('register') }}" class="form__container" method="post">
        @csrf

        <label for="email">{{ __('E-Mail Address') }}</label>
        <input id="email" type="text" class="@error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email">

        @error('email')
            <div class="area-msg">
                {{ message }}
            </div>
        @enderror

        <label for="password">{{ __('Password') }}</label>
        <input type="password" id="password" class="@error('password') is-invalid @enderror" name="password" required autocomplete="new-password">

        @error('password')
            <div class="area-msg">
                {{ message }}
            </div>
        @enderror

        <label for="password-confirm">{{ __('Confirm Password') }}</label>
        <input type="password" id="password-confirm" name="password_confirmation" required autocomplete="new-password">

        <div class="btnContainer">
            <button type="submit" class="btn btn--right">{{ __('Register') }}</button>
        </div>
    </form>
</section>
@endsection
