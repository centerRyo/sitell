<section class="sidebar">
  <section class="pickup">
    <h2 class="pickup__title">注目記事</h2>
    @foreach ($pickup_ronbuns as $pickup_ronbun)
    <a href="{{ route('ronbun.show', $pickup_ronbun->id) }}">
      <div class="pickup__content">
        @if (isset($pickup_ronbun->thumbnail))
          <img src="/uploads/{{ $pickup_ronbun->thumbnail }}">
        @else
          <img src="{{ asset('/img/no_image.png') }}" alt="">
        @endif
        <p class="pickup__content--title">{{ $pickup_ronbun->title }}</p>
      </div>
    </a>
    @endforeach
  </section>

  <section class="category">
    <h2 class="category__title">カテゴリー一覧</h2>
    <ul class="category__container">
      @foreach ($categories as $category)
        <li class="category__item">
          <a href="">{{ $category->name }}</a>
        </li>
      @endforeach
    </ul>
  </section>
</section>