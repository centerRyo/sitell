@extends('layouts.app')

@section('content')
  <div class="site-width">

    <section class="mainContainer">
      <h1 class="title">{{ $ronbun->title }}</h1>
      <div class="ronbunBlock">
        <div class="ronbunBlock__thumbnail">
          @if (isset($ronbun->thumbnail))
            <img src="/uploads/{{ $ronbun->thumbnail }}" alt="">
          @else
            <img src="{{ asset('/img/no_image.png') }}" alt="">
          @endif
        </div>
        <table class="ronbunBlock__info">
          <tr>
            <th>カテゴリー</th>
            <td><a href="">{{ $ronbun->category->name }}</a></td>
          </tr>
          <tr>
            <th>著者</th>
            <td>{{ $ronbun->author }}</td>
          </tr>
          <tr>
            <th>出版年</th>
            <td>{{ $ronbun->year }}年</td>
          </tr>
        </table>
      </div>

      <div class="abstract">
        <h2 class="abstract__title">要約</h2>
        {!! $ronbun->abstract !!}
      </div>

      @if(isset($ronbun->url))
        <a href="{{ $ronbun->url }}" class="leadLink">オリジナル論文はこちら</a>
      @endif
    </section>

    @include('ronbun.sidebar')
  </div>
@endsection