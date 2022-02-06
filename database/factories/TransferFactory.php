<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class TransferFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            //
            'description' => $this->faker->text($maxNbChars = 200),
            'amount' => $this->faker->numberBetween($min = 500, $max = 900),
            'wallet_id' => $this->faker->randomDigitNotNull()
        ];
    }
}
