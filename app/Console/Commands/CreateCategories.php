<?php

namespace App\Console\Commands;

use Carbon\Carbon;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;

class CreateCategories extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'command:createcategories';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Create Default Categories';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $now = Carbon::now();
        $data = [
            ['name' => '数学', 'created_at' => $now, 'updated_at' => $now],
            ['name' => '物理学', 'created_at' => $now, 'updated_at' => $now],
            ['name' => '化学', 'created_at' => $now, 'updated_at' => $now],
            ['name' => '地球科学・天文学', 'created_at' => $now, 'updated_at' => $now],
            ['name' => '生物学・生命科学・基礎医学', 'created_at' => $now, 'updated_at' => $now],
            ['name' => '農学・食品科学', 'created_at' => $now, 'updated_at' => $now],
            ['name' => '一般医学・社会医学・看護学', 'created_at' => $now, 'updated_at' => $now],
            ['name' => '臨床医学', 'created_at' => $now, 'updated_at' => $now],
            ['name' => '歯学', 'created_at' => $now, 'updated_at' => $now],
            ['name' => '薬学', 'created_at' => $now, 'updated_at' => $now],
            ['name' => '一般工学・総合工学', 'created_at' => $now, 'updated_at' => $now],
            ['name' => 'ナノ・材料科学', 'created_at' => $now, 'updated_at' => $now],
            ['name' => '建築学・土木工学', 'created_at' => $now, 'updated_at' => $now],
            ['name' => '機械工学', 'created_at' => $now, 'updated_at' => $now],
            ['name' => '電気電子工学', 'created_at' => $now, 'updated_at' => $now],
            ['name' => '情報科学', 'created_at' => $now, 'updated_at' => $now],
            ['name' => '環境学', 'created_at' => $now, 'updated_at' => $now],
            ['name' => '学際科学', 'created_at' => $now, 'updated_at' => $now],
            ['name' => '哲学・宗教', 'created_at' => $now, 'updated_at' => $now],
            ['name' => '文学・言語学・芸術学', 'created_at' => $now, 'updated_at' => $now],
            ['name' => '人類学・史学・地理学', 'created_at' => $now, 'updated_at' => $now],
            ['name' => '法学・政治学', 'created_at' => $now, 'updated_at' => $now],
            ['name' => '経済学・経営学', 'created_at' => $now, 'updated_at' => $now],
            ['name' => '社会学', 'created_at' => $now, 'updated_at' => $now],
            ['name' => '心理学・教育学', 'created_at' => $now, 'updated_at' => $now],
        ];

        DB::table('categories')->insert($data);
    }
}
