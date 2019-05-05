<?php

namespace NicolasBeauvais\NovaSendgridCard\Http\Controllers;

use NicolasBeauvais\NovaSendgridCard\Sendgrid;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;

class SendgridController extends Controller
{
    protected $sendgrid;

    public function __construct(Sendgrid $sendgrid)
    {
        $this->sendgrid = $sendgrid;
    }

    public function index(Request $request)
    {
        $count = $this->sendgrid->getRecipientCount();

        return response()->json(compact('count'));
    }
}
