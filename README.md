# Nova Sendgrid Cards

[![Latest Version on Packagist](https://img.shields.io/packagist/v/nicolasbeauvais/nova-sendgrid-card.svg?style=flat-square)](https://packagist.org/packages/nicolasbeauvais/nova-sendgrid-card)
[![Total Downloads](https://img.shields.io/packagist/dt/nicolasbeauvais/nova-sendgrid-card.svg?style=flat-square)](https://packagist.org/packages/nicolasbeauvais/nova-sendgrid-card)

Get some insight on your Sendgrid recipient count with this easy to use Nova card.

![nova-sendgrid-card](https://user-images.githubusercontent.com/2951704/44540973-dfbbbd80-a708-11e8-8387-057aa40fcbf0.png)

## Installation

You can install the package in to a Laravel app that uses [Nova](https://nova.laravel.com) via composer:

```bash
composer require nicolasbeauvais/nova-sendgrid-card
```

Next up, you must register the card Nova. This is typically done in the `tools` method of the `NovaServiceProvider`.

```php
// in app/Providers/NovaServiceProvider.php

// ...

public function cards()
{
    return [
        // ...
        new \NicolasBeauvais\NovaSendgridCard\NovaSendgridCard,
    ];
}
```

## Config

For this package to work you must define a sendgrid API key in your `config/services.php` like this:

```php
<?php

return [
    'sendgrid' => [
        'key' => env('SENDGRID_API_KEY', ''),
    ],
];
```
    
## Usage

The card only shows the total number of recipients for your Sendgrid account. Feel free to make a pull request to add more features.

### Changelog

Please see [CHANGELOG](CHANGELOG.md) for more information on what has changed recently.

## Contributing

Please see [CONTRIBUTING](CONTRIBUTING.md) for details.

### Security

If you discover any security related issues, please email nicolasbeauvais1@gmail.com instead of using the issue tracker.

## Credits

- [Nicolas Beauvais](https://github.com/nicolasbeauvais)

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
