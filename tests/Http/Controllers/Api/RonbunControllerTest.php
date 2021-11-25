<?php

namespace Tests\Http\Controllers\Api;

use App\Http\Controllers\Api\RonbunController;
use App\Ronbun;
use Tests\TestCase;

class RonbunControllerTest extends TestCase
{
  /** @test */
  public function 論文テーブルから更新日順で取得できる() {
    $this->createRonbun(
      $title = 'テストタイトル1',
      $author = 'テスト著者1',
      $abstract = 'テストテキスト1テストテキスト1テストテキスト1テストテキスト1',
    );
    $this->createRonbun(
      $title = 'テストタイトル2',
      $author = 'テスト著者2',
      $abstract = 'テストテキスト2テストテキスト2テストテキスト2テストテキスト2',
    );
    $this->createRonbun(
      $title = 'テストタイトル3',
      $author = 'テスト著者3',
      $abstract = 'テストテキスト3テストテキスト3テストテキスト3テストテキスト3',
    );

    $ronbuns = (new RonbunController)->getLatestRonbuns();

    $this->assertEquals('テストタイトル1', $ronbuns->first()->title);
  }

  private function createRonbun($title, $author, $abstract) {
    return Ronbun::create([
      'title' => $title,
      'author' => $author,
      'year' => 2021,
      'category_id' => 1,
      'abstract' => $abstract,
      'url' => 'https://1.example.com',
      'user_id' => 1,
      'thumbnail' => 'https://1.example.com',
    ]);
  }
}
