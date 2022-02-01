<?php

namespace Tests\Http\Controllers\Api;

use App\Category;
use App\Http\Controllers\Api\RonbunController;
use App\Ronbun;
use Tests\TestCase;

class RonbunControllerTest extends TestCase
{
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
