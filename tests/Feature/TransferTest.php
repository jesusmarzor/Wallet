<?php

namespace Tests\Feature;

use App\Models\Transfer;
use App\Models\Wallet;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class TransferTest extends TestCase
{
    use RefreshDatabase;

    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_post_transfer()
    {
        $wallet = Wallet::factory()->create();
        $transfer = Transfer::factory()->make();
        
        $response = $this->json('POST','/api/transfer',[
            'description' => $transfer->description,
            'amount' => $transfer->amount,
            'wallet_id' => $wallet->id
        ]);

        $response->assertStatus(201)
                ->assertJsonStructure([
                    'id','description','amount','wallet_id'
                ]);
        $this->assertDatabaseHas('transfers', [
            'description' => $transfer->description,
            'amount' => $transfer->amount,
            'wallet_id' => $wallet->id
        ]);

        $this->assertDatabaseHas('wallets',[
            'id' => $wallet->id,
            'money' => $wallet->money + $transfer->amount
        ]);
    }
}
