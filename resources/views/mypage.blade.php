@extends('layouts.app')

@section('content')
    <section class="profileContainer">
        <div class="site-width">
            <section class="profile">
                <div class="profile__img"></div>
                <div class="profile__info">
                    <h2 class="profile__name"></h2>
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
                    <div class="content">
                        <a href="">
                            <img src="" alt="">
                            <p></p>
                        </a>
                    </div>
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
    </div>
@endsection
