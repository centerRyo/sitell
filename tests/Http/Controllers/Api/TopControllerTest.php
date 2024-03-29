<?php

namespace Tests\Http\Controllers\Api;

use App\Category;
use App\Http\Controllers\Api\TopController;
use App\Ronbun;
use Tests\TestCase;

class TopControllerTest extends TestCase
{
  /** @test */
  public function 論文テーブルから更新日順で取得できる()
  {
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

    $ronbuns = (new TopController)->getLatestRonbuns();

    $this->assertEquals('テストタイトル3', $ronbuns->first()->title);
  }

  /** @test */
  public function 論文を4件取得できる()
  {
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
    $this->createRonbun(
      $title = 'テストタイトル4',
      $author = 'テスト著者4',
      $abstract = 'テストテキスト4テストテキスト4テストテキスト4テストテキスト4',
    );
    $this->createRonbun(
      $title = 'テストタイトル5',
      $author = 'テスト著者5',
      $abstract = 'テストテキスト5テストテキスト5テストテキスト5テストテキスト5',
    );

    $ronbuns = (new TopController)->getLatestRonbuns();

    $this->assertCount(4, $ronbuns);
  }

  /** @test */
  public function 論文からカテゴリー名が取得できる()
  {
    $category = $this->createCateogry();
    $ronbun = $this->createRonbun(
      $title = 'テストタイトル1',
      $author = 'テスト著者1',
      $abstract = 'テストテキスト1テストテキスト1テストテキスト1テストテキスト1',
      $category_id = $category->id,
    );


    $ronbuns = (new TopController)->getLatestRonbuns();

    $this->assertEquals('テストカテゴリー', $ronbuns->first()->category_name);
  }

  private function createRonbun($title, $author, $abstract, $category_id = 1)
  {
    return Ronbun::create([
      'title' => $title,
      'author' => $author,
      'year' => 2021,
      'category_id' => $category_id,
      'abstract' => $abstract,
      'url' => 'https://1.example.com',
      'user_id' => 1,
      'thumbnail' => 'https://1.example.com',
    ]);
  }

  private function createCateogry()
  {
    return Category::create([
      'name' => 'テストカテゴリー',
    ]);
  }
}
