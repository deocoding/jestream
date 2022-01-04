<x-guest-layout>
    <x-slot name="top_bar">
        <!-- Register -->
        <a href="{{ route('register') }}" class="btn btn_primary uppercase ltr:ml-5 rtl:mr-5">Register</a>
    </x-slot>

    <div class="mx-5 md:mx-10">
        @if (session('status'))
        <div class="mb-4 font-medium text-sm text-green-600">
            {{ session('status') }}
        </div>
        @endif
        <x-jet-validation-errors class="mb-4" />
        <h2 class="uppercase">It’s Great To See You!</h2>
        <h4 class="uppercase">Login Here</h4>
    </div>
    <form class="card mt-5 p-5 md:p-10" method="POST" action="{{ route('login') }}">
        @csrf

        <div class="mb-5">
            <x-jet-label for="email" value="{{ __('Email') }}" />
            <x-jet-input id="email" type="email" name="email" :value="old('email')" required autofocus />
        </div>
        <div class="mb-5">
            <x-jet-label for="password" value="{{ __('Password') }}" />
            <label class="form-control-addon-within">
                <x-jet-input id="password" class="border-none" type="password" name="password" required
                    autocomplete="current-password" />
                <span class="flex items-center ltr:pr-4 rtl:pl-4">
                    <button type="button"
                        class="btn btn-link la la-eye text-xl leading-none text-gray-600 dark:text-gray-600"
                        data-toggle="password-visibility"></button>
                </span>
            </label>
        </div>
        <div class="flex items-center">
            <a href="{{ route('password.request') }}" class="text-sm uppercase">Forgot Password?</a>
            <x-jet-button>
                {{ __('Login') }}
            </x-jet-button>
        </div>
    </form>
</x-guest-layout>