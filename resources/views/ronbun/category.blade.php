@extends('layouts.app')

@section('content')
  <div class="site-width">
    <section class="mainContainer">
      <h1 class="title">{{ $category->name }}</h1>
      <section class="contents">
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
            <span class="content__category">{{ $ronbun->category->name }}</span>
          </div>
          @endforeach
        </div>
        {{ $ronbuns->links() }}
      </section>
    </section>

    @include('ronbun.sidebar')
  </div>
@endsection