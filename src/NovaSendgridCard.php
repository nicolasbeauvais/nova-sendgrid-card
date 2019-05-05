<?php

namespace NicolasBeauvais\NovaSendgridCard;

use Laravel\Nova\Card;

class NovaSendgridCard extends Card
{
    public function __construct(string $index = null)
    {
        $this->withMeta(compact('index'));
    }

    public $width = '1/3';

    public function component()
    {
        return 'nova-sendgrid-card';
    }
}
