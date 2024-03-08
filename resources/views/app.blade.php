{{-- Pour modifier l'url afin qu'il n'y ai pas de doublon --}}
{{-- @php($page['url'] = App::make('request')->getRequestUri()) --}}

<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title inertia>{{ config('app.name', 'Laravel') }}</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

        <!-- Scripts -->
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        {{-- Plugin Page facebook --}}
        <div id="fb-root"></div>
        <script async defer crossorigin="anonymous" src="https://connect.facebook.net/fr_FR/sdk.js#xfbml=1&version=v19.0" nonce="YmNKrnMQ">
        </script>
        {{-- Plugin Page Instagram --}}
        <script src="https://static.elfsight.com/platform/platform.js" data-use-service-core defer></script>
        @inertia
    </body>
</html>
