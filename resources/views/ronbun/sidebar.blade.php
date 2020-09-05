<section class="sidebar">
  <section class="pickup">
    <h2 class="pickup__title">注目記事</h2>
    @foreach ($pickup_ronbuns as $pickup_ronbun)
    <a href="">
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
</section>