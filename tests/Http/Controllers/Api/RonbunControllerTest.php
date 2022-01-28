<?php

namespace Tests\Http\Controllers\Api;

use App\Category;
use App\Http\Controllers\Api\RonbunController;
use App\Ronbun;
use Tests\TestCase;

class RonbunControllerTest extends TestCase
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

    $ronbuns = (new RonbunController)->getLatestRonbuns();

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

    $ronbuns = (new RonbunController)->getLatestRonbuns();

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


    $ronbuns = (new RonbunController)->getLatestRonbuns();

    $this->assertEquals('テストカテゴリー', $ronbuns->first()->category_name);
  }

  /** @test */
  public function 指定したIDの論文情報が取得できる()
  {
    $category = $this->createCateogry();
    $ronbun1 = $this->createRonbun(
      $title = 'テストタイトル1',
      $author = 'テスト著者1',
      $abstract = 'テストテキスト1テストテキスト1テストテキスト1テストテキスト1',
      $category_id = $category->id,
    );
    $ronbun2 = $this->createRonbun(
      $title = 'テストタイトル2',
      $author = 'テスト著者2',
      $abstract = 'テストテキスト2テストテキスト2テストテキスト2テストテキスト2',
      $category_id = $category->id,
    );

    $ronbun = (new RonbunController)->getRonbun($ronbun1->id);

    $this->assertEquals('テストタイトル1', $ronbun->title);
  }

  /** @test */
  public function 指定したカテゴリーIDに紐づく論文一覧が取得できる()
  {
    $category = $this->createCateogry();
    $this->createRonbun(
      $title = 'テストタイトル1',
      $author = 'テスト著者1',
      $abstract = 'テストテキスト1テストテキスト1テストテキスト1テストテキスト1',
      $category_id = $category->id,
    );
    $this->createRonbun(
      $title = 'テストタイトル2',
      $author = 'テスト著者2',
      $abstract = 'テストテキスト2テストテキスト2テストテキスト2テストテキスト2',
      $category_id = $category->id,
    );
    $this->createRonbun(
      $title = 'テストタイトル3',
      $author = 'テスト著者3',
      $abstract = 'テストテキスト3テストテキスト3テストテキスト3テストテキスト3',
      $category_id = 1,
    );

    $ronbunList = (new RonbunController)->getCategoryRonbunList($category->id);

    $this->assertEquals(2, $ronbunList->count());
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
