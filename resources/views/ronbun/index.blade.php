@extends('layouts.app')

@section('content')
  <div class="site-width">
    <section class="slider">

    </section>

    <section class="mainContainer">
      <section class="contents">
        <h2 class="contents__title">新着論文一覧</h2>
        <div class="contents__container">
          @foreach ($ronbuns as $ronbun)
          <div class="content">
            <a href="{{ route('ronbun.show', $ronbun->id) }}" class="content__link">
              @if (isset($ronbun->thumbnail))
                <img src="/uploads/{{ $ronbun->thumbnail }}" class="content__image">
              @else
                <img src="{{ asset('/img/no_image.png') }}" class="content__image">
              @endif
              <p class="content__title">{{ $ronbun->title }}</p>
            </a>
            <span class="content__category">{{ $ronbun->category_name }}</span>
          </div>
          @endforeach
        </div>

        <a href="" class="leadLink">新着論文一覧を見る</a>
      </section>
    </section>

    @include('ronbun.sidebar')
  </div>
@endsection