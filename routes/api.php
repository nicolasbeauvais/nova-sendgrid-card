<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/', \NicolasBeauvais\NovaSendgridCard\Http\Controllers\SendgridController::class.'@index');
