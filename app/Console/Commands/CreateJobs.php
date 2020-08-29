<?php

namespace App\Console\Commands;

use Carbon\Carbon;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;

class CreateJobs extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'command:createjobs';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Create Default Jobs';

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
            ['name' => '公務員', 'created_at' => $now, 'updated_at' => $now],
            ['name' => '経営者・役員', 'created_at' => $now, 'updated_at' => $now],
            ['name' => '会社員', 'created_at' => $now, 'updated_at' => $now],
            ['name' => '自営業', 'created_at' => $now, 'updated_at' => $now],
            ['name' => '自由業', 'created_at' => $now, 'updated_at' => $now],
            ['name' => '専業主婦(主夫)', 'created_at' => $now, 'updated_at' => $now],
            ['name' => 'パート・アルバイト', 'created_at' => $now, 'updated_at' => $now],
            ['name' => '学生', 'created_at' => $now, 'updated_at' => $now],
            ['name' => 'その他', 'created_at' => $now, 'updated_at' => $now],
        ];

        DB::table('jobs')->insert($data);
    }
}
