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
                        <a href="" class="content__link">
                            @if (isset($ronbun->thumbnail))
                            <img src="/uploads/{{ $ronbun->thumbnail }}" class="content__image">
                            @else
                            <img src="{{ asset('/img/no_image.png') }}" class="content__image">
                            @endif
                            <p class="content__title">{{ $ronbun->title }}</p>
                        </a>
                        <span class="content__category">{{$ronbun->category->name}}</span>
                        <div class="content__button">
                            <a href="{{ route('ronbun.edit', $ronbun->id) }}"><i class="fas fa-pencil-alt content__button--edit"></i></a>
                            <form method="post" action="{{ route('ronbun.delete', $ronbun->id) }}">
                                @csrf
                                <button type="submit" onclick="return confirm('本当に削除してもよろしいですか？');"><i class="fas fa-trash-alt content__button--trash"></i></button>
                            </form>
                        </div>
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
