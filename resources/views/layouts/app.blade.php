<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Noto+Sans+JP" rel="stylesheet">
    <script src="https://kit.fontawesome.com/931c61dabd.js" crossorigin="anonymous"></script>

    <!-- Styles -->
    <link href="{{ asset('css/reset.css') }}" rel="stylesheet">
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>
<body>
    <div id="app">
        <!-- <header class="header">
            <div class="site-width">
                <h1 class="header__title"><a href="{{ route('ronbun.index') }}"><img src="{{ asset('/img/logo3.png') }}" alt=""></a></h1>

                <nav>
                    <ul class="menu">
                        @guest
                            <li class="menu__item">
                                <a class="menu__item_link" href="{{ route('login') }}">{{ __('Login') }}</a>
                            </li>
                            @if (Route::has('register'))
                                <li class="menu__item">
                                    <a class="menu__item_link" href="{{ route('register') }}">{{ __('Register') }}</a>
                                </li>
                            @endif
                        @else
                            <li class="menu__item">
                                @if (isset($user->pic))
                                    <a href="{{ route('mypage') }}">
                                        <img class="menu__item_img" src="/uploads/{{ $user->pic }}" alt="">
                                    </a>
                                @else
                                    <a href="{{ route('mypage') }}">
                                        <img class="menu__item_img" src="{{ asset('/img/user_default.png')}}" alt="">
                                    </a>
                                @endif
                            </li>
                            <li class="menu__item">
                                <a class="menu__item_link" href="{{ route('logout')}}" onclick="event.preventDefault(); document.getElementById('logout-form').submit();">{{ __('Logout') }}</a>

                                <form action="{{ route('logout') }}" method="post" style="display: none;" id="logout-form">
                                    @csrf
                                </form>
                            </li>
                        @endguest 
                    </ul>
                </nav>
            </div>
        </header>

        @if (session('flash_message'))
            <div class="msgSlide">
                {{ session('flash_message') }}
            </div>
        @endif
        <main class="container_wrapper">
            @yield('content')
        </main>
        <footer class="footer">
            Copyright - Sitell 2020, All Right Reserved.
        </footer> -->
    </div>
</body>
</html>
