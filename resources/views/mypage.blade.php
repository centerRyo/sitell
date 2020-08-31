@extends('layouts.app')

@section('content')
    <section class="profileContainer">
        <div class="site-width">
            <section class="profile">
                <div class="profile__img">
                    @if (isset($user->pic))
                        <img src="/uploads/{{ $user->pic }}" alt="">
                    @else
                        <img src="{{ asset('/img/user_default.png') }}" alt="">
                    @endif
                </div>
                <div class="profile__info">
                    <h2 class="profile__name">{{ $user->name}}</h2>
                    <div class="sns">
                        <a href=""><i class="fab fa-facebook-square"></i></a>
                        <a href=""><i class="fab fa-twitter-square"></i></a>
                        <a href=""><i class="fab fa-instagram-square"></i></a>
                    </div>
                </div>
            </section>
        </div>
    </section>

    <div class="site-width">
        <section class="mainContainer">
            <section class="contents">
                <h2 class="contents__title">登録論文一覧</h2>
                <div class="contents__container">
                    @foreach ($ronbuns as $ronbun)
                    <div class="content">
                        <a href="">
                            @if (isset($ronbun->thumbnail))
                            <img src="/uploads/{{ $ronbun->thumbnail }}" class="content__image">
                            @else
                            <img src="{{ asset('/img/no_image.png') }}" class="content__image">
                            @endif
                            <p>{{ $ronbun->title }}</p>
                        </a>
                    </div>
                    @endforeach
                </div>
            </section>

            <section class="contents">
                <h2 class="contents__title">お気に入り登録一覧</h2>
                <div class="contents__container">
                    <div class="content">
                        <a href="">
                            <img src="" alt="">
                            <p></p>
                        </a>
                    </div>
                </div>
            </section>
        </section>
        @include('sidebar_mypage')
    </div>
@endsection
