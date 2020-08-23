@extends('layouts.app')

@section('content')
  <div class="site-width">
    <h1 class="title">退会</h1>
    <div class="withdrawMsg">
    <p>
      会員情報の削除はこちらから行えます。
    </p>
    <p class="textRed">
      登録した論文や、お気に入り等の情報は<br>
      ご利用いただくことができなくなるのでご注意ください。
    </p>
    <p>
      退会しますか？
    </p>
    </div>
    {{ Form::open(['route' => 'user.delete', 'class' => '']) }}
      <div class="btnContainer">
        <!-- {{ Form::button( 'はい、退会します', ['type' => 'submit', 'class' => 'btn']) }} -->
        <button type="submit" class="btn" onclick="return check()">はい、退会します</button>
        <a class="mypageLink" href="{{ route('mypage')}}">いいえ、退会しません</a>
      </div>
        {{ Form::close() }}
  </div>

  <script>
    function check()
    {
      if (confirm('本当に退会してもよろしいですか？')) {
        return true;
      } else {
        return false;
      }
    }
  </script>
@endsection