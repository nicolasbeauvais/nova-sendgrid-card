<?php

namespace NicolasBeauvais\NovaSendgridCard;

use GuzzleHttp\Client;

class Sendgrid
{
    private $client;

    public function client() : Client
    {
        if ($this->client) {
            return $this->client;
        }

        return $this->client = new Client([
            'base_uri' => 'https://api.sendgrid.com/v3/',
            'headers' => ['Authorization' => 'Bearer ' . config('services.sendgrid.key')]
        ]);
    }

    public function getRecipientCount() : ?int
    {
        $response = $this->client()->get('contactdb/recipients/count');

        if ($response->getStatusCode() !== 200) {
            throw new \Exception('Can\'t access sendgrid recipients count: ' . $response->getStatusCode() . $response->getBody());
        }

        $response = json_decode($response->getBody(), true);

        return (int)$response['recipient_count'];
    }
}
