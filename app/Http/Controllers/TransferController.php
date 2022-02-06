<?php

namespace App\Http\Controllers;

use App\Models\Transfer;
use App\Models\Wallet;
use Illuminate\Http\Request;

class TransferController extends Controller
{
    //
    public function store(Request $request){
        $wallet = Wallet::find($request->wallet_id);
        $wallet->money = $wallet->money + $request->amount;
        $wallet->update();
        
        $transfer = Transfer::create($request->all());
        return response()->json($transfer,201);
    }
}
