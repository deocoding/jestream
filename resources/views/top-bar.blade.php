<header class="top-bar">

    <!-- Menu Toggler -->
    <button type="button" class="menu-toggler la la-bars" data-toggle="menu"></button>

    <!-- Brand -->
    <span class="brand">Yeti</span>

    <!-- Search -->
    <form class="hidden md:block ltr:ml-10 rtl:mr-10" action="#">
        <label class="form-control-addon-within rounded-full">
            <input type="text" class="form-control border-none" placeholder="Search">
            <button type="button"
                class="btn btn-link text-gray-300 dark:text-gray-700 hover:text-primary dark:hover:text-primary text-xl leading-none la la-search ltr:mr-4 rtl:ml-4"></button>
        </label>
    </form>

    <!-- Right -->
    <div class="flex items-center ltr:ml-auto rtl:mr-auto">

        <!-- Dark Mode -->
        <label class="switch switch_outlined" data-toggle="tooltip" data-tippy-content="Toggle Dark Mode"
            aria-expanded="false">
            <input id="darkModeToggler" type="checkbox">
            <span></span>
        </label>

        <!-- Fullscreen -->
        <button id="fullScreenToggler" type="button"
            class="hidden lg:inline-block btn-link ltr:ml-3 rtl:mr-3 px-2 text-2xl leading-none la la-expand-arrows-alt"
            data-toggle="tooltip" data-tippy-content="Fullscreen" aria-expanded="false"></button>

        <!-- Apps -->
        <div class="dropdown self-stretch">
            <button type="button"
                class="flex items-center h-full btn-link ltr:ml-4 rtl:mr-4 lg:ltr:ml-1 lg:rtl:mr-1 px-2 text-2xl leading-none la la-box"
                data-toggle="custom-dropdown-menu" data-tippy-arrow="true" data-tippy-placement="bottom"
                aria-expanded="false">
            </button>
            <div class="custom-dropdown-menu p-5 text-center">
                <div class="flex justify-around">
                    <a href="#" class="p-5 text-gray-700 dark:text-gray-500 hover:text-primary dark:hover:text-primary">
                        <span class="block la la-cog text-5xl leading-none"></span>
                        <span>Settings</span>
                    </a>
                    <a href="#" class="p-5 text-gray-700 dark:text-gray-500 hover:text-primary dark:hover:text-primary">
                        <span class="block la la-users text-5xl leading-none"></span>
                        <span>Users</span>
                    </a>
                </div>
                <div class="flex justify-around">
                    <a href="#" class="p-5 text-gray-700 dark:text-gray-500 hover:text-primary dark:hover:text-primary">
                        <span class="block la la-book text-5xl leading-none"></span>
                        <span>Docs</span>
                    </a>
                    <a href="#" class="p-5 text-gray-700 dark:text-gray-500 hover:text-primary dark:hover:text-primary">
                        <span class="block la la-dollar text-5xl leading-none"></span>
                        <span>Shop</span>
                    </a>
                </div>
            </div>
        </div>

        <!-- Notifications -->
        <div class="dropdown self-stretch">
            <button type="button"
                class="relative flex items-center h-full btn-link ltr:ml-1 rtl:mr-1 px-2 text-2xl leading-none la la-bell"
                data-toggle="custom-dropdown-menu" data-tippy-arrow="true" data-tippy-placement="bottom-end"
                aria-expanded="false">
                <span
                    class="absolute top-0 right-0 rounded-full border border-primary -mt-1 -mr-1 px-2 leading-tight text-xs font-body text-primary">3</span>
            </button>
            <div class="custom-dropdown-menu">
                <div class="flex items-center px-5 py-2">
                    <h5 class="mb-0 uppercase">Notifications</h5>
                    <button class="btn btn_outlined btn_warning uppercase ltr:ml-auto rtl:mr-auto">Clear All</button>
                </div>
                <hr>
                <div class="p-5 hover:bg-primary-100 dark:hover:bg-primary-900">
                    <a href="#">
                        <h6 class="uppercase">Heading One</h6>
                    </a>
                    <p>Lorem ipsum dolor, sit amet consectetur.</p>
                    <small>Today</small>
                </div>
                <hr>
                <div class="p-5 hover:bg-primary-100 dark:hover:bg-primary-900">
                    <a href="#">
                        <h6 class="uppercase">Heading Two</h6>
                    </a>
                    <p>Mollitia sequi dolor architecto aut deserunt.</p>
                    <small>Yesterday</small>
                </div>
                <hr>
                <div class="p-5 hover:bg-primary-100 dark:hover:bg-primary-900">
                    <a href="#">
                        <h6 class="uppercase">Heading Three</h6>
                    </a>
                    <p>Nobis reprehenderit sed quos deserunt</p>
                    <small>Last Week</small>
                </div>
            </div>
        </div>

        {{-- <x-jet-dropdown>
            <x-slot name="trigger">
                <button class="flex items-center ltr:ml-4 rtl:mr-4 text-gray-700" data-toggle="custom-dropdown-menu"
                    data-tippy-arrow="true" data-tippy-placement="bottom-end" aria-expanded="false">
                    @if (Laravel\Jetstream\Jetstream::managesProfilePhotos())
                    <span class="avatar">
                        <img class="h-10 w-10 rounded-full object-cover" src="{{ Auth::user()->profile_photo_url }}"
                            alt="{{ Auth::user()->name }}" />
                    </span>
                    @else
                    <span class="inline-flex rounded-md">
                        {{ Auth::user()->name }}
                        <svg class="ml-2 -mr-0.5 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path fill-rule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clip-rule="evenodd" />
                        </svg>
                    </span>
                    @endif
                </button>

                <div class="custom-dropdown-menu w-64">
                    <div class="p-5">
                        <h5 class="uppercase">{{ Auth::user()->name }}</h5>
                        <p>Editor</p>
                    </div>
                    <hr>
                    <div class="p-5">
                        <a href="{{ route('profile.show') }}"
                            class="flex items-center text-gray-700 dark:text-gray-500 hover:text-primary dark:hover:text-primary">
                            <span class="la la-user-circle text-2xl leading-none ltr:mr-2 rtl:ml-2"></span>
                            View Profile
                        </a>
                        <a href="#"
                            class="flex items-center text-gray-700 dark:text-gray-500 hover:text-primary dark:hover:text-primary mt-5">
                            <span class="la la-key text-2xl leading-none ltr:mr-2 rtl:ml-2"></span>
                            Change Password
                        </a>
                    </div>
                    <hr>
                    <div class="p-5">
                        <!-- Authentication -->
                        <form method="POST" action="{{ route('logout') }}">
                            @csrf

                            <x-jet-dropdown-link href="{{ route('logout') }}" onclick="event.preventDefault();
                                        this.closest('form').submit();">
                                {{ __('Log Out') }}
                            </x-jet-dropdown-link>
                        </form>
                    </div>
                </div>
            </x-slot>
        </x-jet-dropdown> --}}

        <!-- User Menu -->
        <div class="dropdown">
            <button class="flex items-center ltr:ml-4 rtl:mr-4 text-gray-700" data-toggle="custom-dropdown-menu"
                data-tippy-arrow="true" data-tippy-placement="bottom-end" aria-expanded="false">
                @if (Laravel\Jetstream\Jetstream::managesProfilePhotos())
                <span class="avatar">
                    <img class="h-10 w-10 rounded-full object-cover" src="{{ Auth::user()->profile_photo_url }}"
                        alt="{{ Auth::user()->name }}" />
                </span>
                @else
                <span class="inline-flex rounded-md">
                    {{ Auth::user()->name }}
                    <svg class="ml-2 -mr-0.5 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                        fill="currentColor">
                        <path fill-rule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clip-rule="evenodd" />
                    </svg>
                </span>
                @endif
            </button>

            <div class="custom-dropdown-menu w-64">
                <div class="p-5">
                    <h5 class="uppercase">{{ Auth::user()->name }}</h5>
                    <p>Editor</p>
                </div>
                <hr>
                <div class="p-5">
                    <a href="{{ route('profile.show') }}"
                        class="flex items-center text-gray-700 dark:text-gray-500 hover:text-primary dark:hover:text-primary">
                        <span class="la la-user-circle text-2xl leading-none ltr:mr-2 rtl:ml-2"></span>
                        View Profile
                    </a>
                    <a href="#"
                        class="flex items-center text-gray-700 dark:text-gray-500 hover:text-primary dark:hover:text-primary mt-5">
                        <span class="la la-key text-2xl leading-none ltr:mr-2 rtl:ml-2"></span>
                        Change Password
                    </a>
                </div>
                <hr>
                <div class="p-5">
                    <!-- Authentication -->
                    <form method="POST" action="{{ route('logout') }}">
                        @csrf

                        <x-jet-dropdown-link href="{{ route('logout') }}" onclick="event.preventDefault();
                                        this.closest('form').submit();">
                            {{ __('Log Out') }}
                        </x-jet-dropdown-link>
                    </form>
                </div>
            </div>
        </div>
    </div>
</header>