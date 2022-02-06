<?php

namespace Database\Seeders;

use App\Models\Wallet;
use Illuminate\Database\Seeder;

class WalletSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Primer wallet
        $wallet = new Wallet();
        $wallet->money = 3600.0;
        $wallet->save();
    }
}
