<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" dir="ltr">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Styles -->
    <link rel="stylesheet" href="{{ mix('css/app.css') }}">

    <!-- Scripts -->
    <script src="{{ mix('js/app.js') }}" defer></script>
</head>

<body aria-expanded="false">

    <!-- Page Heading -->
    @if (isset($top_bar))
    <section class="top-bar">
        <span class="brand">Yeti</span>

        <!-- Right Navigation -->
        <nav class="flex items-center ltr:ml-auto rtl:mr-auto">

            <!-- Dark Mode -->
            <label class="switch switch_outlined" data-toggle="tooltip" data-tippy-content="Toggle Dark Mode"
                aria-expanded="false">
                <input id="darkModeToggler" type="checkbox">
                <span></span>
            </label>

            <!-- Fullscreen -->
            <button id="fullScreenToggler" type="button"
                class="hidden lg:inline-block btn-link ltr:ml-5 rtl:mr-5 text-2xl leading-none la la-expand-arrows-alt"
                data-toggle="tooltip" data-tippy-content="Fullscreen" aria-expanded="false"></button>

            {{ $top_bar }}
        </nav>
    </section>
    @endif

    <div class="container flex items-center justify-center mt-20 py-10">
        <div class="w-full md:w-1/2 xl:w-1/3">
            {{ $slot }}
        </div>
    </div>

    <!-- Development -->
    {{-- <script src="https://unpkg.com/@popperjs/core@2/dist/umd/popper.min.js"></script>
    <script src="https://unpkg.com/tippy.js@6/dist/tippy-bundle.umd.js"></script> --}}

    <!-- Scripts -->
    <script src='/js/vendor.js'></script>
    <script src='/js/script.js'></script>
</body>

</html>