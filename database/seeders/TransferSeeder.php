<?php

namespace Database\Seeders;

use App\Models\Transfer;
use Illuminate\Database\Seeder;

class TransferSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $transfer = new Transfer();
        $transfer->description = "Salary";
        $transfer->amount = 4800;
        $transfer->wallet_id = 1;
        $transfer->save();

        $transfer = new Transfer();
        $transfer->description = "Rent";
        $transfer->amount = -1200;
        $transfer->wallet_id = 1;
        $transfer->save();

    }
}
