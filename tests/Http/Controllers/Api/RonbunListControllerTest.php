<?php

namespace Tests\Http\Controllers\Api;

use App\Category;
use App\Http\Controllers\Api\RonbunListController;
use App\Ronbun;
use Tests\TestCase;

class RonbunListControllerTest extends TestCase
{
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

    $ronbunList = (new RonbunListController)->getCategoryRonbunList($category->id);

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
