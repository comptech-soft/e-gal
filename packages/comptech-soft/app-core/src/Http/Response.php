<?php

namespace Comptechsoft\Appcore\Http;

use Exception;

class Response {

    public static function Success($message, $payload = NULL) {
        return [
            'success' => true,
            'exception' => NULL,
            'result' => [
                'type' => 'success',
                'message' => $message,
                'payload' => $payload
            ]
        ];
    }

    public static function ValidationFail($validator, $record, $rules, $messages, $message = 'Datele introduse nu sunt valide!') {
        return [
            'success' => false,
            'exception' => NULL,
            'errors' => $validator->errors(),
            'result' => [
                'type' => 'danger',
                'message' => $message,
                'payload' => [
                    'record' => $record,
                    'rules' => $rules,
                    'messages' => $messages,
                ]
            ]
        ];
    }

    public static function Exception(Exception $e, $payload = NULL, $message = NULL) {
        return [
            'success' => false,
            'exception' => [
                'message' => $e->getMessage(),
                'line' => $e->getLine(),
                'file' => $e->getFile(),
            ],
            'result' => [
                'type' => 'danger',
                'message' => $message ? $message : $e->getMessage(),
                'payload' => $payload,
            ]
        ];
    }

}