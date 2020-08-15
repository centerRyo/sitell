@extends('layouts.app')

@section('content')
<section class="form">
    <h2 class="form__title">{{ __('Reset Password') }}</h2>

    @if (session('status'))
        <div>
            {{ session('status') }}
        </div>
    @endif

    <form action="{{ route('password.email') }}" method="post" class="form__container">
        @csrf

        <label for="email">{{ __('E-Mail Address') }}</label>
        <input type="text" id="email" class="@error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email" autofocus>

        @error('email')
            <div class="area-msg">
                {{ $message }}
            </div>
        @enderror

        <div class="btnContainer">
            <button type="submit" class="btn btn--right">{{ __('Send Password Reset Link') }}</button>
        </div>
    </form>
</section>
@endsection
