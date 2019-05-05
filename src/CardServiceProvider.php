<?php

namespace NicolasBeauvais\NovaSendgridCard;

use Laravel\Nova\Nova;
use Laravel\Nova\Events\ServingNova;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\ServiceProvider;
use NicolasBeauvais\NovaSendgridCard\Http\Middleware\Authorize;

class CardServiceProvider extends ServiceProvider
{
    public function boot()
    {
        $this->app->booted(function () {
            $this->routes();
        });

        Nova::serving(function (ServingNova $event) {
            Nova::script('nova-sendgrid-card', __DIR__.'/../dist/js/card.js');
        });
    }

    protected function routes()
    {
        if ($this->app->routesAreCached()) {
            return;
        }

        Route::middleware(['nova'])
                ->prefix('nova-vendor/nicolasbeauvais/nova-sendgrid-card')
                ->group(__DIR__.'/../routes/api.php');
    }

    public function register()
    {
        //
    }
}
