<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreTransfer extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            //
            'description' => 'required',
            'amount' => 'required'
        ];
    }
    public function attributes()
    {
        return [
            'description' => 'descripción',
            'amount' => 'cantidad'
        ];
    }

    public function messages()
    {
        return [
            // 'description.required' => 'Es necesario introducir la descripción'
        ];
    }
}
