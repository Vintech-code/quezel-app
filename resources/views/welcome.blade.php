<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Quezel's Cafe Hub</title>
    <link rel="manifest" href="/manifest.json">
    <meta name="theme-color" content="#e8f9fd">
    @viteReactRefresh
    @vite(['resources/css/app.css', 'resources/js/app.tsx'])
</head>

<body class="antialiased">
    <div id="app"></div>
</body>

</html>