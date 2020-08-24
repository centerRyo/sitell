<?php

namespace App\Console\Commands;

use Carbon\Carbon;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;

class CreateRoles extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'command:createroles';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Create Default Roles';

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
            ['name' => '農林水産', 'created_at' => $now, 'updated_at' => $now],
            ['name' => '土木建築', 'created_at' => $now, 'updated_at' => $now],
            ['name' => '製造', 'created_at' => $now, 'updated_at' => $now],
            ['name' => '電気・ガス・水道', 'created_at' => $now, 'updated_at' => $now],
            ['name' => '運輸・通信', 'created_at' => $now, 'updated_at' => $now],
            ['name' => '旅行', 'created_at' => $now, 'updated_at' => $now],
            ['name' => '卸・商社', 'created_at' => $now, 'updated_at' => $now],
            ['name' => '小売', 'created_at' => $now, 'updated_at' => $now],
            ['name' => '飲食店', 'created_at' => $now, 'updated_at' => $now],
            ['name' => '金融・保険', 'created_at' => $now, 'updated_at' => $now],
            ['name' => '不動産', 'created_at' => $now, 'updated_at' => $now],
            ['name' => 'マスコミ・広告・印刷', 'created_at' => $now, 'updated_at' => $now],
            ['name' => '医療・保険衛生', 'created_at' => $now, 'updated_at' => $now],
            ['name' => '教育', 'created_at' => $now, 'updated_at' => $now],
            ['name' => '娯楽', 'created_at' => $now, 'updated_at' => $now],
            ['name' => 'IT・ソフトウェア', 'created_at' => $now, 'updated_at' => $now],
            ['name' => 'コンサルティング・シンクタンク', 'created_at' => $now, 'updated_at' => $now],
            ['name' => '個人サービス', 'created_at' => $now, 'updated_at' => $now],
            ['name' => '事業サービス', 'created_at' => $now, 'updated_at' => $now],
            ['name' => 'その他', 'created_at' => $now, 'updated_at' => $now],
        ];

        DB::table('roles')->insert($data);
    }
}
