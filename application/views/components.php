<!DOCTYPE html>
<html lang="en">

<head>
    <meta charSet="utf-8" />
    <link rel="preload" as="font" href="/src/media/2aaf0723e720e8b9-s.p.woff2" crossorigin="" type="font/woff2" />
    <link rel="preload" as="font" href="/src/media/90475aac776488b6-s.p.woff2" crossorigin="" type="font/woff2" />
    <link rel="stylesheet" href="/src/css/fe9f8ebb655ca26f.css" data-precedence="next" />
    <script async="" defer="" data-website-id="1f3acb4e-518d-4043-919c-cdcc62d557dd"
        src="https://find-coder-analytics.vercel.app/umami.js"></script>
    <title>Flutter Bee - Components</title>
    <meta name="description" content="A Flutter Component Tools." />
    <meta name="keywords" content="Flutter,Dart, Components" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta property="og:title" content="FlutterBee" />
    <meta property="og:description" content="A Flutter Component Tools." />
    <meta property="og:site_name" content="FlutterBee" />
    <meta property="og:locale" content="en_US" />
    <meta property="og:type" content="website" />
    <!-- <link rel="shortcut icon" href="/images/favicon-16x16.png"/> -->
    <!-- <link rel="icon" href="/images/favicon.ico"/> -->
    <!-- <link rel="apple-touch-icon" href="/images/apple-touch-icon.png"/> -->
    <meta name="next-size-adjust" />
    <script src="/src/chunks/polyfills-c67a75d1b6f99dc8.js" noModule=""></script>
    <script src="https://cdn.tailwindcss.com"></script>
</head>

<body class="min-h-screen bg-white font-sans antialiased __variable_0ec1f4 __variable_deb966">
    <div class="flex min-h-screen flex-col">
        <!-- ------------------------------------------------------------HEADER------------------------------------------------------------ -->
        <header class="container sticky top-0 z-40 border-b-2 bg-white">
            <div class="flex h-20 items-center justify-between py-6">
                <div class="flex gap-6 md:gap-10">
                    <a class="hidden items-center space-x-2 md:flex" href="/">
                        <div class="inline-flex items-center space-x-2" style="cursor: pointer;"><img
                                src="/assets/svg/hero.svg" alt="logo" class="h-auto w-10">
                            <span class="font-bold">FlutterBee</span>
                        </div>
                    </a>
                    <nav class="hidden gap-6 md:flex">
                        <a class="flex items-center text-lg font-semibold transition-colors sm:text-sm"
                            href="/getStarted.html">Getting Started</a>
                        <a class="flex items-center text-lg font-semibold transition-colors sm:text-sm"
                            href="/components.html">Components</a>
                        <a class="flex items-center text-lg font-semibold transition-colors sm:text-sm"
                            href="/joinUs.html">Join Us</a>
                    </nav>
                    <button class="flex items-center space-x-2 md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="lucide lucide-align-center">
                            <line x1="21" y1="6" x2="3" y2="6"></line>
                            <line x1="17" y1="12" x2="7" y2="12"></line>
                            <line x1="19" y1="18" x2="5" y2="18"></line>
                        </svg>
                        <span class="font-heading text-xl font-extrabold sm:inline-block">DevUI</span>
                    </button>
                    <div
                        class="animate-in slide-in-from-bottom-80 fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-md md:hidden">
                        <div class="text-popover-foreground relative z-20 grid gap-6 rounded-md bg-white p-4 shadow-md">
                            <a class="flex items-center space-x-2" href="/"><svg width="50" height="56"
                                    viewBox="0 0 50 56" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-8 w-8">
                                    <path
                                        d="M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z"
                                        fill="black"></path>
                                </svg><span class="font-bold">DevUI</span></a>
                            <nav class="grid grid-flow-row auto-rows-max text-sm"><a
                                    class="flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline"
                                    href="/getStarted.html">Getting Started</a><a
                                    class="flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline"
                                    href="/components.html">Components</a>
                                <a class="flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline"
                                    href="/joinUs.html">Join Us</a>
                            </nav>
                        </div>
                    </div>
                </div>
                <nav>
                    <button
                        class="inline-flex items-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background border border-input hover:bg-accent hover:text-accent-foreground py-2 px-4 relative h-9 w-full justify-start rounded-[0.5rem] text-sm text-muted-foreground sm:pr-12 md:w-40 lg:w-64">
                        <span class="hidden lg:inline-flex">Search Components...</span>
                        <span class="inline-flex lg:hidden">Search...</span>
                        <kbd
                            class="pointer-events-none absolute right-1.5 top-2 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
                            <span class="text-xs">⌘</span>
                            K
                        </kbd>
                    </button>
                </nav>
            </div>
        </header>


        <!-- ------------------------------------------------------------MAIN------------------------------------------------------------ -->

        <main class="flex-1">
            <div class="mx-auto max-w-7xl px-6 py-10 lg:px-4">
                <!-- ------------------------------------------------------------App Bar------------------------------------------------------------ -->

                <div class="flex flex-col pb-10 lg:flex-row lg:space-x-10">
                    <div class="lg:w-[30%]">
                        <img alt="WomenWithLaptop" loading="lazy" width="250" height="100" decoding="async"
                            data-nimg="1" style="color:transparent" src="/assets/svg/appbar.svg" />
                        <h1 class="mt-4 font-heading text-2xl font-bold md:text-3xl">App Bar</h1>
                        <p class="mt-4 font-sans text-sm font-semibold text-gray-600">Explore our Flutter Based App-Bar
                            components, designed for ready-to-use in your developement.</p>
                    </div>
                    <div class="mt-10 w-full lg:mt-0 lg:w-[70%]">
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-4 lg:gap-y-4">
                            <div class="rounded-md p-2 hover:bg-gray-100/50">
                                <a href="/components/avatars">
                                    <div class="rounded-t-md border border-gray-200 bg-white">
                                        <img alt="Avatar" loading="lazy" width="200" height="100" decoding="async"
                                            data-nimg="1" class="w-full rounded-md object-cover"
                                            style="color:transparent"
                                            srcSet="/_next/image?url=%2Ffiles%2Fapplication%2Favatars.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2Ffiles%2Fapplication%2Favatars.png&amp;w=640&amp;q=75 2x"
                                            src="/_next/image?url=%2Ffiles%2Fapplication%2Favatars.png&amp;w=640&amp;q=75" />
                                        <hr />
                                        <p class="mt-2 p-2 pt-0 text-sm font-semibold text-gray-600">Avatar
                                            <!-- -->
                                            components
                                        </p>
                                    </div>
                                </a>
                            </div>
                            <div class="rounded-md p-2 hover:bg-gray-100/50">
                                <a href="/components/banners">
                                    <div class="rounded-t-md border border-gray-200 bg-white">
                                        <img alt="Banner" loading="lazy" width="200" height="100" decoding="async"
                                            data-nimg="1" class="w-full rounded-md object-cover"
                                            style="color:transparent"
                                            srcSet="/_next/image?url=%2Ffiles%2Fapplication%2Fbanners.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2Ffiles%2Fapplication%2Fbanners.png&amp;w=640&amp;q=75 2x"
                                            src="/_next/image?url=%2Ffiles%2Fapplication%2Fbanners.png&amp;w=640&amp;q=75" />
                                        <hr />
                                        <p class="mt-2 p-2 pt-0 text-sm font-semibold text-gray-600">Banner
                                            <!-- -->
                                            components
                                        </p>
                                    </div>
                                </a>
                            </div>
                            <div class="rounded-md p-2 hover:bg-gray-100/50">
                                <a href="/components/breadcrumbs">
                                    <div class="rounded-t-md border border-gray-200 bg-white">
                                        <img alt="Breadcrumb" loading="lazy" width="200" height="100" decoding="async"
                                            data-nimg="1" class="w-full rounded-md object-cover"
                                            style="color:transparent"
                                            srcSet="/_next/image?url=%2Ffiles%2Fapplication%2Fbreadcrumbs.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2Ffiles%2Fapplication%2Fbreadcrumbs.png&amp;w=640&amp;q=75 2x"
                                            src="/_next/image?url=%2Ffiles%2Fapplication%2Fbreadcrumbs.png&amp;w=640&amp;q=75" />
                                        <hr />
                                        <p class="mt-2 p-2 pt-0 text-sm font-semibold text-gray-600">Breadcrumb
                                            <!-- -->
                                            components
                                        </p>
                                    </div>
                                </a>
                            </div>
                            <div class="rounded-md p-2 hover:bg-gray-100/50">
                                <a href="/components/buttons">
                                    <div class="rounded-t-md border border-gray-200 bg-white">
                                        <img alt="Button" loading="lazy" width="200" height="100" decoding="async"
                                            data-nimg="1" class="w-full rounded-md object-cover"
                                            style="color:transparent"
                                            srcSet="/_next/image?url=%2Ffiles%2Fapplication%2Fbuttons.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2Ffiles%2Fapplication%2Fbuttons.png&amp;w=640&amp;q=75 2x"
                                            src="/_next/image?url=%2Ffiles%2Fapplication%2Fbuttons.png&amp;w=640&amp;q=75" />
                                        <hr />
                                        <p class="mt-2 p-2 pt-0 text-sm font-semibold text-gray-600">Button
                                            <!-- -->
                                            components
                                        </p>
                                    </div>
                                </a>
                            </div>
                            <div class="rounded-md p-2 hover:bg-gray-100/50">
                                <a href="/components/cards">
                                    <div class="rounded-t-md border border-gray-200 bg-white">
                                        <img alt="Card" loading="lazy" width="200" height="100" decoding="async"
                                            data-nimg="1" class="w-full rounded-md object-cover"
                                            style="color:transparent"
                                            srcSet="/_next/image?url=%2Ffiles%2Fapplication%2Fcards.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2Ffiles%2Fapplication%2Fcards.png&amp;w=640&amp;q=75 2x"
                                            src="/_next/image?url=%2Ffiles%2Fapplication%2Fcards.png&amp;w=640&amp;q=75" />
                                        <hr />
                                        <p class="mt-2 p-2 pt-0 text-sm font-semibold text-gray-600">Card
                                            <!-- -->
                                            components
                                        </p>
                                    </div>
                                </a>
                            </div>
                            <div class="rounded-md p-2 hover:bg-gray-100/50">
                                <a href="/components/inputs">
                                    <div class="rounded-t-md border border-gray-200 bg-white">
                                        <img alt="Input" loading="lazy" width="200" height="100" decoding="async"
                                            data-nimg="1" class="w-full rounded-md object-cover"
                                            style="color:transparent"
                                            srcSet="/_next/image?url=%2Ffiles%2Fapplication%2Finput.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2Ffiles%2Fapplication%2Finput.png&amp;w=640&amp;q=75 2x"
                                            src="/_next/image?url=%2Ffiles%2Fapplication%2Finput.png&amp;w=640&amp;q=75" />
                                        <hr />
                                        <p class="mt-2 p-2 pt-0 text-sm font-semibold text-gray-600">Input
                                            <!-- -->
                                            components
                                        </p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <hr class="h-[2px] w-full bg-black" />
                <!-- ------------------------------------------------------------UI------------------------------------------------------------ -->

                <div class="flex flex-col py-10 lg:flex-row lg:space-x-10">
                    <div class="lg:w-[30%]">
                        <img alt="Man" loading="lazy" width="250" height="100" decoding="async" data-nimg="1"
                            style="color:transparent" src="/assets/svg/ui.svg" />
                        <h1 class="mt-4 font-heading text-2xl font-bold md:text-3xl">UI Components</h1>
                        <p class="mt-4 font-sans text-sm font-semibold text-gray-600">Explore our Flutter Based UI
                            Components,
                            designed for ready-to-use in your Applications.</p>
                    </div>
                    <div class="mt-10 w-full lg:mt-0 lg:w-[70%]">
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-4 lg:gap-y-4">
                            <div class="rounded-md p-2 hover:bg-gray-100/50">
                                <a href="/components/cta">
                                    <div class="rounded-t-md border border-gray-200 bg-white">
                                        <img alt="CTA" loading="lazy" width="200" height="100" decoding="async"
                                            data-nimg="1" class="w-full rounded-md object-cover"
                                            style="color:transparent"
                                            srcSet="/_next/image?url=%2Ffiles%2Fmarketing%2Fcta.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2Ffiles%2Fmarketing%2Fcta.png&amp;w=640&amp;q=75 2x"
                                            src="/_next/image?url=%2Ffiles%2Fmarketing%2Fcta.png&amp;w=640&amp;q=75" />
                                        <hr />
                                        <p class="mt-2 p-2 pt-0 text-sm font-semibold text-gray-600">CTA
                                            <!-- -->
                                            components
                                        </p>
                                    </div>
                                </a>
                            </div>
                            <div class="rounded-md p-2 hover:bg-gray-100/50">
                                <a href="/components/error">
                                    <div class="rounded-t-md border border-gray-200 bg-white">
                                        <img alt="Error" loading="lazy" width="200" height="100" decoding="async"
                                            data-nimg="1" class="w-full rounded-md object-cover"
                                            style="color:transparent"
                                            srcSet="/_next/image?url=%2Ffiles%2Fmarketing%2Ferror.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2Ffiles%2Fmarketing%2Ferror.png&amp;w=640&amp;q=75 2x"
                                            src="/_next/image?url=%2Ffiles%2Fmarketing%2Ferror.png&amp;w=640&amp;q=75" />
                                        <hr />
                                        <p class="mt-2 p-2 pt-0 text-sm font-semibold text-gray-600">Error
                                            <!-- -->
                                            components
                                        </p>
                                    </div>
                                </a>
                            </div>
                            <div class="rounded-md p-2 hover:bg-gray-100/50">
                                <a href="/components/faq">
                                    <div class="rounded-t-md border border-gray-200 bg-white">
                                        <img alt="FAQs" loading="lazy" width="200" height="100" decoding="async"
                                            data-nimg="1" class="w-full rounded-md object-cover"
                                            style="color:transparent"
                                            srcSet="/_next/image?url=%2Ffiles%2Fmarketing%2Ffaq.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2Ffiles%2Fmarketing%2Ffaq.png&amp;w=640&amp;q=75 2x"
                                            src="/_next/image?url=%2Ffiles%2Fmarketing%2Ffaq.png&amp;w=640&amp;q=75" />
                                        <hr />
                                        <p class="mt-2 p-2 pt-0 text-sm font-semibold text-gray-600">FAQs
                                            <!-- -->
                                            components
                                        </p>
                                    </div>
                                </a>
                            </div>
                            <div class="rounded-md p-2 hover:bg-gray-100/50">
                                <a href="/components/feature">
                                    <div class="rounded-t-md border border-gray-200 bg-white">
                                        <img alt="Feature" loading="lazy" width="200" height="100" decoding="async"
                                            data-nimg="1" class="w-full rounded-md object-cover"
                                            style="color:transparent"
                                            srcSet="/_next/image?url=%2Ffiles%2Fmarketing%2Ffeatures.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2Ffiles%2Fmarketing%2Ffeatures.png&amp;w=640&amp;q=75 2x"
                                            src="/_next/image?url=%2Ffiles%2Fmarketing%2Ffeatures.png&amp;w=640&amp;q=75" />
                                        <hr />
                                        <p class="mt-2 p-2 pt-0 text-sm font-semibold text-gray-600">Feature
                                            <!-- -->
                                            components
                                        </p>
                                    </div>
                                </a>
                            </div>
                            <div class="rounded-md p-2 hover:bg-gray-100/50">
                                <a href="/components/footer">
                                    <div class="rounded-t-md border border-gray-200 bg-white">
                                        <img alt="Footer" loading="lazy" width="200" height="100" decoding="async"
                                            data-nimg="1" class="w-full rounded-md object-cover"
                                            style="color:transparent"
                                            srcSet="/_next/image?url=%2Ffiles%2Fmarketing%2Ffooter.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2Ffiles%2Fmarketing%2Ffooter.png&amp;w=640&amp;q=75 2x"
                                            src="/_next/image?url=%2Ffiles%2Fmarketing%2Ffooter.png&amp;w=640&amp;q=75" />
                                        <hr />
                                        <p class="mt-2 p-2 pt-0 text-sm font-semibold text-gray-600">Footer
                                            <!-- -->
                                            components
                                        </p>
                                    </div>
                                </a>
                            </div>
                            <div class="rounded-md p-2 hover:bg-gray-100/50">
                                <a href="/components/hero">
                                    <div class="rounded-t-md border border-gray-200 bg-white">
                                        <img alt="Hero" loading="lazy" width="200" height="100" decoding="async"
                                            data-nimg="1" class="w-full rounded-md object-cover"
                                            style="color:transparent"
                                            srcSet="/_next/image?url=%2Ffiles%2Fmarketing%2Fhero.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2Ffiles%2Fmarketing%2Fhero.png&amp;w=640&amp;q=75 2x"
                                            src="/_next/image?url=%2Ffiles%2Fmarketing%2Fhero.png&amp;w=640&amp;q=75" />
                                        <hr />
                                        <p class="mt-2 p-2 pt-0 text-sm font-semibold text-gray-600">Hero
                                            <!-- -->
                                            components
                                        </p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <hr class="h-[2px] w-full bg-black" />
                <!-- ------------------------------------------------------------Cards------------------------------------------------------------ -->

                <div class="flex flex-col py-10 lg:flex-row lg:space-x-10">
                    <div class="lg:w-[30%]">
                        <img alt="Man" loading="lazy" width="250" height="100" decoding="async" data-nimg="1"
                            style="color:transparent" src="/assets/svg/cards.svg" />
                        <h1 class="mt-4 font-heading text-2xl font-bold md:text-3xl">Cards</h1>
                        <p class="mt-4 font-sans text-sm font-semibold text-gray-600">Explore our Ready-to-use,
                            customizable cards .</p>
                    </div>
                    <div class="mt-10 w-full lg:mt-0 lg:w-[70%]">
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-4 lg:gap-y-4">
                            <div class="rounded-md p-2 hover:bg-gray-100/50">
                                <a href="/components/cart">
                                    <div class="rounded-t-md border border-gray-200 bg-white">
                                        <img alt="Cart" loading="lazy" width="200" height="100" decoding="async"
                                            data-nimg="1" class="w-full rounded-md object-cover"
                                            style="color:transparent"
                                            srcSet="/_next/image?url=%2Ffiles%2Fecommerce%2Fcart.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2Ffiles%2Fecommerce%2Fcart.png&amp;w=640&amp;q=75 2x"
                                            src="/_next/image?url=%2Ffiles%2Fecommerce%2Fcart.png&amp;w=640&amp;q=75" />
                                        <hr />
                                        <p class="mt-2 p-2 pt-0 text-sm font-semibold text-gray-600">Cart
                                            <!-- -->
                                            components
                                        </p>
                                    </div>
                                </a>
                            </div>
                            <div class="rounded-md p-2 hover:bg-gray-100/50">
                                <a href="/components/checkout">
                                    <div class="rounded-t-md border border-gray-200 bg-white">
                                        <img alt="Checkout" loading="lazy" width="200" height="100" decoding="async"
                                            data-nimg="1" class="w-full rounded-md object-cover"
                                            style="color:transparent"
                                            srcSet="/_next/image?url=%2Ffiles%2Fecommerce%2Fcheckout.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2Ffiles%2Fecommerce%2Fcheckout.png&amp;w=640&amp;q=75 2x"
                                            src="/_next/image?url=%2Ffiles%2Fecommerce%2Fcheckout.png&amp;w=640&amp;q=75" />
                                        <hr />
                                        <p class="mt-2 p-2 pt-0 text-sm font-semibold text-gray-600">Checkout
                                            <!-- -->
                                            components
                                        </p>
                                    </div>
                                </a>
                            </div>
                            <div class="rounded-md p-2 hover:bg-gray-100/50">
                                <a href="/components/overview">
                                    <div class="rounded-t-md border border-gray-200 bg-white">
                                        <img alt="Product Overview" loading="lazy" width="200" height="100"
                                            decoding="async" data-nimg="1" class="w-full rounded-md object-cover"
                                            style="color:transparent"
                                            srcSet="/_next/image?url=%2Ffiles%2Fecommerce%2Foverview.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2Ffiles%2Fecommerce%2Foverview.png&amp;w=640&amp;q=75 2x"
                                            src="/_next/image?url=%2Ffiles%2Fecommerce%2Foverview.png&amp;w=640&amp;q=75" />
                                        <hr />
                                        <p class="mt-2 p-2 pt-0 text-sm font-semibold text-gray-600">Product Overview
                                            <!-- -->
                                            components
                                        </p>
                                    </div>
                                </a>
                            </div>
                            <div class="rounded-md p-2 hover:bg-gray-100/50">
                                <a href="/components/filter">
                                    <div class="rounded-t-md border border-gray-200 bg-white">
                                        <img alt="Filters" loading="lazy" width="200" height="100" decoding="async"
                                            data-nimg="1" class="w-full rounded-md object-cover"
                                            style="color:transparent"
                                            srcSet="/_next/image?url=%2Ffiles%2Fecommerce%2Ffilter.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2Ffiles%2Fecommerce%2Ffilter.png&amp;w=640&amp;q=75 2x"
                                            src="/_next/image?url=%2Ffiles%2Fecommerce%2Ffilter.png&amp;w=640&amp;q=75" />
                                        <hr />
                                        <p class="mt-2 p-2 pt-0 text-sm font-semibold text-gray-600">Filters
                                            <!-- -->
                                            components
                                        </p>
                                    </div>
                                </a>
                            </div>
                            <div class="rounded-md p-2 hover:bg-gray-100/50">
                                <a href="/components/order">
                                    <div class="rounded-t-md border border-gray-200 bg-white">
                                        <img alt="Orders" loading="lazy" width="200" height="100" decoding="async"
                                            data-nimg="1" class="w-full rounded-md object-cover"
                                            style="color:transparent"
                                            srcSet="/_next/image?url=%2Ffiles%2Fecommerce%2Forder.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2Ffiles%2Fecommerce%2Forder.png&amp;w=640&amp;q=75 2x"
                                            src="/_next/image?url=%2Ffiles%2Fecommerce%2Forder.png&amp;w=640&amp;q=75" />
                                        <hr />
                                        <p class="mt-2 p-2 pt-0 text-sm font-semibold text-gray-600">Orders
                                            <!-- -->
                                            components
                                        </p>
                                    </div>
                                </a>
                            </div>
                            <div class="rounded-md p-2 hover:bg-gray-100/50">
                                <a href="/components/product">
                                    <div class="rounded-t-md border border-gray-200 bg-white">
                                        <img alt="Products" loading="lazy" width="200" height="100" decoding="async"
                                            data-nimg="1" class="w-full rounded-md object-cover"
                                            style="color:transparent"
                                            srcSet="/_next/image?url=%2Ffiles%2Fecommerce%2Fproduct.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2Ffiles%2Fecommerce%2Fproduct.png&amp;w=640&amp;q=75 2x"
                                            src="/_next/image?url=%2Ffiles%2Fecommerce%2Fproduct.png&amp;w=640&amp;q=75" />
                                        <hr />
                                        <p class="mt-2 p-2 pt-0 text-sm font-semibold text-gray-600">Products
                                            <!-- -->
                                            components
                                        </p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <div class="max-w-7xl mx-auto text-center mt-12">
            <footer class="px-4 py-4 flex flex-col items-center">
                <div class="flex flex-col md:flex-row md:items-center"><img src="/assets/svg/hero.svg" alt="logo"
                        class="h-auto w-10">
                    <div class="mt-2 grow md:ml-4 md:mt-0">
                        <p class="text-base font-semibold text-gray-700">Built with ❤️ by developers for developers</p>
                    </div>
                </div>
            </footer>
        </div>
    </div>
    <script src="/_next/static/chunks/webpack-6fc121c1bbfee0c0.js" async=""></script>
    <script src="/_next/static/chunks/9b340135-7a2a74c0da015a18.js" async=""></script>
    <script src="/_next/static/chunks/6549-ccfcce00de83b1aa.js" async=""></script>
    <script src="/_next/static/chunks/main-app-e9ace43a1cae92f0.js" async=""></script>
</body>

</html>
<script>
    (self.__next_f = self.__next_f || []).push([0])
</script>
<script>
    self.__next_f.push([1, "1:HL[\"/_next/static/media/2aaf0723e720e8b9-s.p.woff2\",{\"as\":\"font\",\"type\":\"font/woff2\"}]\n2:HL[\"/_next/static/media/90475aac776488b6-s.p.woff2\",{\"as\":\"font\",\"type\":\"font/woff2\"}]\n3:HL[\"/_next/static/css/fe9f8ebb655ca26f.css\",{\"as\":\"style\"}]\n0:\"$L4\"\n"])
</script>
<script>
    self.__next_f.push([1, "5:I{\"id\":\"7843\",\"chunks\":[\"2272:static/chunks/webpack-6fc121c1bbfee0c0.js\",\"8159:static/chunks/9b340135-7a2a74c0da015a18.js\",\"6549:static/chunks/6549-ccfcce00de83b1aa.js\"],\"name\":\"\",\"async\":false}\n7:I{\"id\":\"2016\",\"chunks\":[\"2272:static/chunks/webpack-6fc121c1bbfee0c0.js\",\"8159:static/chunks/9b340135-7a2a74c0da015a18.js\",\"6549:static/chunks/6549-ccfcce00de83b1aa.js\"],\"name\":\"\",\"async\":false}\n8:I{\"id\":\"9586\",\"chunks\":[\"2272:static/chunks/webpack-6fc121c1bbfee0c0.js\",\"8159:static/chunks/9b340135-7a2a74c0da015a"])
</script>
<script>
    self.__next_f.push([1, "18.js\",\"6549:static/chunks/6549-ccfcce00de83b1aa.js\"],\"name\":\"\",\"async\":false}\n9:I{\"id\":\"6497\",\"chunks\":[\"2272:static/chunks/webpack-6fc121c1bbfee0c0.js\",\"8159:static/chunks/9b340135-7a2a74c0da015a18.js\",\"6549:static/chunks/6549-ccfcce00de83b1aa.js\"],\"name\":\"\",\"async\":false}\n"])
</script>
<script>
    self.__next_f.push([1, "4:[[[\"$\",\"link\",\"0\",{\"rel\":\"stylesheet\",\"href\":\"/_next/static/css/fe9f8ebb655ca26f.css\",\"precedence\":\"next\"}]],[\"$\",\"$L5\",null,{\"assetPrefix\":\"\",\"initialCanonicalUrl\":\"/components\",\"initialTree\":[\"\",{\"children\":[\"(components)\",{\"children\":[\"components\",{\"children\":[\"__PAGE__\",{}]}]}]},\"$undefined\",\"$undefined\",true],\"initialHead\":[\"$L6\",[\"$\",\"meta\",null,{\"name\":\"next-size-adjust\"}]],\"globalErrorComponent\":\"$7\",\"notFound\":[\"$\",\"html\",null,{\"lang\":\"en\",\"suppressHydrationWarning\":true,\"children\":[[\"$\",\"head\",null,{}],[\"$\",\"script\",null,{\"async\":true,\"defer\":true,\"data-website-id\":\"1f3acb4e-518d-4043-919c-cdcc62d557dd\",\"src\":\"https://find-coder-analytics.vercel.app/umami.js\"}],[\"$\",\"body\",null,{\"className\":\"min-h-screen bg-white font-sans antialiased __variable_0ec1f4 __variable_deb966\",\"children\":[\"$undefined\",[[\"$\",\"title\",null,{\"children\":\"404: This page could not be found.\"}],[\"$\",\"div\",null,{\"style\":{\"fontFamily\":\"system-ui,\\\"Segoe UI\\\",Roboto,Helvetica,Arial,sans-serif,\\\"Apple Color Emoji\\\",\\\"Segoe UI Emoji\\\"\",\"height\":\"100vh\",\"textAlign\":\"center\",\"display\":\"flex\",\"flexDirection\":\"column\",\"alignItems\":\"center\",\"justifyContent\":\"center\"},\"children\":[\"$\",\"div\",null,{\"children\":[[\"$\",\"style\",null,{\"dangerouslySetInnerHTML\":{\"__html\":\"body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}\"}}],[\"$\",\"h1\",null,{\"className\":\"next-error-h1\",\"style\":{\"display\":\"inline-block\",\"margin\":\"0 20px 0 0\",\"padding\":\"0 23px 0 0\",\"fontSize\":24,\"fontWeight\":500,\"verticalAlign\":\"top\",\"lineHeight\":\"49px\"},\"children\":\"404\"}],[\"$\",\"div\",null,{\"style\":{\"display\":\"inline-block\"},\"children\":[\"$\",\"h2\",null,{\"style\":{\"fontSize\":14,\"fontWeight\":400,\"lineHeight\":\"49px\",\"margin\":0},\"children\":\"This page could not be found.\"}]}]]}]}]]]}]]}],\"asNotFound\":false,\"children\":[[\"$\",\"html\",null,{\"lang\":\"en\",\"suppressHydrationWarning\":true,\"children\":[[\"$\",\"head\",null,{}],[\"$\",\"script\",null,{\"async\":true,\"defer\":true,\"data-website-id\":\"1f3acb4e-518d-4043-919c-cdcc62d557dd\",\"src\":\"https://find-coder-analytics.vercel.app/umami.js\"}],[\"$\",\"body\",null,{\"className\":\"min-h-screen bg-white font-sans antialiased __variable_0ec1f4 __variable_deb966\",\"children\":[\"$\",\"$L8\",null,{\"parallelRouterKey\":\"children\",\"segmentPath\":[\"children\"],\"error\":\"$undefined\",\"errorStyles\":\"$undefined\",\"loading\":\"$undefined\",\"loadingStyles\":\"$undefined\",\"hasLoading\":false,\"template\":[\"$\",\"$L9\",null,{}],\"templateStyles\":\"$undefined\",\"notFound\":\"$undefined\",\"notFoundStyles\":\"$undefined\",\"asNotFound\":false,\"childProp\":{\"current\":[\"$\",\"$L8\",null,{\"parallelRouterKey\":\"children\",\"segmentPath\":[\"children\",\"(components)\",\"children\"],\"error\":\"$undefined\",\"errorStyles\":\"$undefined\",\"loading\":\"$undefined\",\"loadingStyles\":\"$undefined\",\"hasLoading\":false,\"template\":[\"$\",\"$L9\",null,{}],\"templateStyles\":\"$undefined\",\"notFound\":\"$undefined\",\"notFoundStyles\":\"$undefined\",\"asNotFound\":false,\"childProp\":{\"current\":[\"$La\",null],\"segment\":\"components\"},\"styles\":[]}],\"segment\":\"(components)\"},\"styles\":[]}]}]]}],null]}]]\n"])
</script>
<script>
    self.__next_f.push([1, "b:I{\"id\":\"837\",\"chunks\":[\"8813:static/chunks/5d0aeb23-334229b51143f5b3.js\",\"218:static/chunks/d5fc2502-cb30c64e87f43e44.js\",\"4275:static/chunks/4275-781dd566ed7ac61a.js\",\"7449:static/chunks/7449-9baaed2aa9550fa3.js\",\"1341:static/chunks/1341-91ed695fce38eda4.js\",\"2564:static/chunks/2564-638c3a76aceb4f39.js\",\"9963:static/chunks/app/(pages)/pages/layout-01cbce6ac3b4a646.js\"],\"name\":\"MainNav\",\"async\":false}\nc:I{\"id\":\"6340\",\"chunks\":[\"8813:static/chunks/5d0aeb23-334229b51143f5b3.js\",\"218:static/chunks/d5fc2502-c"])
</script>
<script>
    self.__next_f.push([1, "b30c64e87f43e44.js\",\"4275:static/chunks/4275-781dd566ed7ac61a.js\",\"7449:static/chunks/7449-9baaed2aa9550fa3.js\",\"1341:static/chunks/1341-91ed695fce38eda4.js\",\"2564:static/chunks/2564-638c3a76aceb4f39.js\",\"9963:static/chunks/app/(pages)/pages/layout-01cbce6ac3b4a646.js\"],\"name\":\"CommandMenu\",\"async\":false}\ne:I{\"id\":\"7449\",\"chunks\":[\"8813:static/chunks/5d0aeb23-334229b51143f5b3.js\",\"218:static/chunks/d5fc2502-cb30c64e87f43e44.js\",\"4275:static/chunks/4275-781dd566ed7ac61a.js\",\"7449:static/chunks/7449-9baaed2aa"])
</script>
<script>
    self.__next_f.push([1, "9550fa3.js\",\"1341:static/chunks/1341-91ed695fce38eda4.js\",\"2564:static/chunks/2564-638c3a76aceb4f39.js\",\"9963:static/chunks/app/(pages)/pages/layout-01cbce6ac3b4a646.js\"],\"name\":\"\",\"async\":false}\n"])
</script>
<script>
    self.__next_f.push([1, "a:[\"$\",\"div\",null,{\"className\":\"flex min-h-screen flex-col\",\"children\":[[\"$\",\"header\",null,{\"className\":\"container sticky top-0 z-40 border-b-2 bg-white\",\"children\":[\"$\",\"div\",null,{\"className\":\"flex h-20 items-center justify-between py-6\",\"children\":[[\"$\",\"$Lb\",null,{\"items\":[{\"title\":\"Getting Started\",\"href\":\"/getting-started\"},{\"title\":\"Components\",\"href\":\"/components\"},{\"title\":\"Page Examples\",\"href\":\"/pages\"}]}],[\"$\",\"nav\",null,{\"children\":[\"$\",\"$Lc\",null,{}]}]]}]}],[\"$\",\"main\",null,{\"className\":\"flex-1\",\"children\":[\"$\",\"$L8\",null,{\"parallelRouterKey\":\"children\",\"segmentPath\":[\"children\",\"(components)\",\"children\",\"components\",\"children\"],\"error\":\"$undefined\",\"errorStyles\":\"$undefined\",\"loading\":\"$undefined\",\"loadingStyles\":\"$undefined\",\"hasLoading\":false,\"template\":[\"$\",\"$L9\",null,{}],\"templateStyles\":\"$undefined\",\"notFound\":\"$undefined\",\"notFoundStyles\":\"$undefined\",\"asNotFound\":false,\"childProp\":{\"current\":[\"$Ld\",null],\"segment\":\"__PAGE__\"},\"styles\":[]}]}],[\"$\",\"div\",null,{\"className\":\"mx-auto max-w-7xl px-10 py-6 text-start md:px-0\",\"children\":[\"$\",\"h6\",null,{\"children\":[\"Build With\",\" \",[\"$\",\"$Le\",null,{\"href\":\"https://nextjs.org\",\"children\":[\"$\",\"strong\",null,{\"children\":\"NextJs 13\"}]}],\",\",[\"$\",\"$Le\",null,{\"href\":\"https://tailwindcss.com/\",\"children\":[\"$\",\"strong\",null,{\"children\":\"TailwindCSS\"}]}],\". Illustrations by\",\" \",[\"$\",\"$Le\",null,{\"href\":\"https://popsy.co\",\"children\":[\"$\",\"strong\",null,{\"children\":\"Popsy\"}]}]]}]}]]}]\n"])
</script>
<script>
    self.__next_f.push([1, "6:[[[\"$\",\"meta\",null,{\"charSet\":\"utf-8\"}],[\"$\",\"title\",null,{\"children\":\"DevUI\"}],[\"$\",\"meta\",null,{\"name\":\"description\",\"content\":\"An tailwind css component library.\"}],null,null,[\"$\",\"link\",null,{\"rel\":\"manifest\",\"href\":\"https://devui.io/images/site.webmanifest\"}],null,[\"$\",\"meta\",null,{\"name\":\"keywords\",\"content\":\"Next.js,React,Tailwind CSS,Html\"}],null,null,null,[\"$\",\"meta\",null,{\"name\":\"viewport\",\"content\":\"width=device-width, initial-scale=1\"}],null,null,null,null,null,null,null,null,null,null,[]],[null,null,null,null],null,null,[null,null,null,null,null],null,[null,[\"$\",\"meta\",null,{\"property\":\"og:title\",\"content\":\"DevUI\"}],[\"$\",\"meta\",null,{\"property\":\"og:description\",\"content\":\"An tailwind css component library.\"}],[\"$\",\"meta\",null,{\"property\":\"og:url\",\"content\":\"https://devui.io/\"}],[\"$\",\"meta\",null,{\"property\":\"og:site_name\",\"content\":\"DevUI\"}],[\"$\",\"meta\",null,{\"property\":\"og:locale\",\"content\":\"en_US\"}],null,null,null,null,null,null,null,null,null,[\"$\",\"meta\",null,{\"property\":\"og:type\",\"content\":\"website\"}]],null,null,[[[\"$\",\"link\",null,{\"rel\":\"shortcut icon\",\"href\":\"/images/favicon-16x16.png\"}]],[[\"$\",\"link\",null,{\"rel\":\"icon\",\"href\":\"/images/favicon.ico\"}]],[[\"$\",\"link\",null,{\"rel\":\"apple-touch-icon\",\"href\":\"/images/apple-touch-icon.png\"}]],null]]\n"])
</script>
<script>
    self.__next_f.push([1, "f:I{\"id\":\"9991\",\"chunks\":[\"9774:static/chunks/framework-0459c8ba67ce1751.js\",\"8813:static/chunks/5d0aeb23-334229b51143f5b3.js\",\"218:static/chunks/d5fc2502-cb30c64e87f43e44.js\",\"3631:static/chunks/733be52f-dc0a84967583f74d.js\",\"4275:static/chunks/4275-781dd566ed7ac61a.js\",\"9991:static/chunks/9991-39b1dac26bc96b35.js\",\"493:static/chunks/493-9f611e166626f47f.js\",\"8835:static/chunks/8835-8dcd056c7a9777ce.js\",\"8469:static/chunks/app/(components)/components/(marketing)/testimonial/page-edeeddc7be1e60b6.js\"],\"name\":\"\",\"async\":false}\n"])
</script>
<script>
    self.__next_f.push([1, "d:[\"$\",\"div\",null,{\"className\":\"mx-auto max-w-7xl px-6 py-10 lg:px-4\",\"children\":[[\"$\",\"div\",null,{\"className\":\"flex flex-col pb-10 lg:flex-row lg:space-x-10\",\"children\":[[\"$\",\"div\",null,{\"className\":\"lg:w-[30%]\",\"children\":[[\"$\",\"$Lf\",null,{\"src\":\"/woman-with-a-laptop.svg\",\"height\":100,\"width\":250,\"alt\":\"WomenWithLaptop\"}],[\"$\",\"h1\",null,{\"className\":\"mt-4 font-heading text-2xl font-bold md:text-3xl\",\"children\":\"Application UI components\"}],[\"$\",\"p\",null,{\"className\":\"mt-4 font-sans text-sm font-semibold text-gray-600\",\"children\":\"Explore our Application UI components, designed for crafting dynamic web applications with versatile interface elements.\"}]]}],[\"$\",\"div\",null,{\"className\":\"mt-10 w-full lg:mt-0 lg:w-[70%]\",\"children\":[\"$\",\"div\",null,{\"className\":\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-4 lg:gap-y-4\",\"children\":[[\"$\",\"div\",\"Avatar\",{\"className\":\"rounded-md p-2 hover:bg-gray-100/50\",\"children\":[\"$\",\"$Le\",null,{\"href\":\"/components/avatars\",\"children\":[\"$\",\"div\",null,{\"className\":\"rounded-t-md border border-gray-200 bg-white\",\"children\":[[\"$\",\"$Lf\",null,{\"src\":\"/files/application/avatars.png\",\"height\":100,\"width\":200,\"alt\":\"Avatar\",\"className\":\"w-full rounded-md object-cover\"}],[\"$\",\"hr\",null,{}],[\"$\",\"p\",null,{\"className\":\"mt-2 p-2 pt-0 text-sm font-semibold text-gray-600\",\"children\":[\"Avatar\",\" components\"]}]]}]}]}],[\"$\",\"div\",\"Banner\",{\"className\":\"rounded-md p-2 hover:bg-gray-100/50\",\"children\":[\"$\",\"$Le\",null,{\"href\":\"/components/banners\",\"children\":[\"$\",\"div\",null,{\"className\":\"rounded-t-md border border-gray-200 bg-white\",\"children\":[[\"$\",\"$Lf\",null,{\"src\":\"/files/application/banners.png\",\"height\":100,\"width\":200,\"alt\":\"Banner\",\"className\":\"w-full rounded-md object-cover\"}],[\"$\",\"hr\",null,{}],[\"$\",\"p\",null,{\"className\":\"mt-2 p-2 pt-0 text-sm font-semibold text-gray-600\",\"children\":[\"Banner\",\" components\"]}]]}]}]}],[\"$\",\"div\",\"Breadcrumb\",{\"className\":\"rounded-md p-2 hover:bg-gray-100/50\",\"children\":[\"$\",\"$Le\",null,{\"href\":\"/components/breadcrumbs\",\"children\":[\"$\",\"div\",null,{\"className\":\"rounded-t-md border border-gray-200 bg-white\",\"children\":[[\"$\",\"$Lf\",null,{\"src\":\"/files/application/breadcrumbs.png\",\"height\":100,\"width\":200,\"alt\":\"Breadcrumb\",\"className\":\"w-full rounded-md object-cover\"}],[\"$\",\"hr\",null,{}],[\"$\",\"p\",null,{\"className\":\"mt-2 p-2 pt-0 text-sm font-semibold text-gray-600\",\"children\":[\"Breadcrumb\",\" components\"]}]]}]}]}],[\"$\",\"div\",\"Button\",{\"className\":\"rounded-md p-2 hover:bg-gray-100/50\",\"children\":[\"$\",\"$Le\",null,{\"href\":\"/components/buttons\",\"children\":[\"$\",\"div\",null,{\"className\":\"rounded-t-md border border-gray-200 bg-white\",\"children\":[[\"$\",\"$Lf\",null,{\"src\":\"/files/application/buttons.png\",\"height\":100,\"width\":200,\"alt\":\"Button\",\"className\":\"w-full rounded-md object-cover\"}],[\"$\",\"hr\",null,{}],[\"$\",\"p\",null,{\"className\":\"mt-2 p-2 pt-0 text-sm font-semibold text-gray-600\",\"children\":[\"Button\",\" components\"]}]]}]}]}],[\"$\",\"div\",\"Card\",{\"className\":\"rounded-md p-2 hover:bg-gray-100/50\",\"children\":[\"$\",\"$Le\",null,{\"href\":\"/components/cards\",\"children\":[\"$\",\"div\",null,{\"className\":\"rounded-t-md border border-gray-200 bg-white\",\"children\":[[\"$\",\"$Lf\",null,{\"src\":\"/files/application/cards.png\",\"height\":100,\"width\":200,\"alt\":\"Card\",\"className\":\"w-full rounded-md object-cover\"}],[\"$\",\"hr\",null,{}],[\"$\",\"p\",null,{\"className\":\"mt-2 p-2 pt-0 text-sm font-semibold text-gray-600\",\"children\":[\"Card\",\" components\"]}]]}]}]}],[\"$\",\"div\",\"Input\",{\"className\":\"rounded-md p-2 hover:bg-gray-100/50\",\"children\":[\"$\",\"$Le\",null,{\"href\":\"/components/inputs\",\"children\":[\"$\",\"div\",null,{\"className\":\"rounded-t-md border border-gray-200 bg-white\",\"children\":[[\"$\",\"$Lf\",null,{\"src\":\"/files/application/input.png\",\"height\":100,\"width\":200,\"alt\":\"Input\",\"className\":\"w-full rounded-md object-cover\"}],[\"$\",\"hr\",null,{}],[\"$\",\"p\",null,{\"className\":\"mt-2 p-2 pt-0 text-sm font-semibold text-gray-600\",\"children\":[\"Input\",\" components\"]}]]}]}]}],[\"$\",\"div\",\"Navbar\",{\"className\":\"rounded-md p-2 hover:bg-gray-100/50\",\"children\":[\"$\",\"$Le\",null,{\"href\":\"/components/navbars\",\"children\":[\"$\",\"div\",null,{\"className\":\"rounded-t-md border border-gray-200 bg-white\",\"children\":[[\"$\",\"$Lf\",null,{\"src\":\"/files/application/navbars.png\",\"height\":100,\"width\":200,\"alt\":\"Navbar\",\"className\":\"w-full rounded-md object-cover\"}],[\"$\",\"hr\",null,{}],[\"$\",\"p\",null,{\"className\":\"mt-2 p-2 pt-0 text-sm font-semibold text-gray-600\",\"children\":[\"Navbar\",\" components\"]}]]}]}]}],[\"$\",\"div\",\"Pagination\",{\"className\":\"rounded-md p-2 hover:bg-gray-100/50\",\"children\":[\"$\",\"$Le\",null,{\"href\":\"/components/pagination\",\"children\":[\"$\",\"div\",null,{\"className\":\"rounded-t-md border border-gray-200 bg-white\",\"children\":[[\"$\",\"$Lf\",null,{\"src\":\"/files/application/pagination.png\",\"height\":100,\"width\":200,\"alt\":\"Pagination\",\"className\":\"w-full rounded-md object-cover\"}],[\"$\",\"hr\",null,{}],[\"$\",\"p\",null,{\"className\":\"mt-2 p-2 pt-0 text-sm font-semibold text-gray-600\",\"children\":[\"Pagination\",\" components\"]}]]}]}]}],[\"$\",\"div\",\"Sidebar\",{\"className\":\"rounded-md p-2 hover:bg-gray-100/50\",\"children\":[\"$\",\"$Le\",null,{\"href\":\"/components/sidebars\",\"children\":[\"$\",\"div\",null,{\"className\":\"rounded-t-md border border-gray-200 bg-white\",\"children\":[[\"$\",\"$Lf\",null,{\"src\":\"/files/application/sidebars.png\",\"height\":100,\"width\":200,\"alt\":\"Sidebar\",\"className\":\"w-full rounded-md object-cover\"}],[\"$\",\"hr\",null,{}],[\"$\",\"p\",null,{\"className\":\"mt-2 p-2 pt-0 text-sm font-semibold text-gray-600\",\"children\":[\"Sidebar\",\" components\"]}]]}]}]}],[\"$\",\"div\",\"Sign In\",{\"className\":\"rounded-md p-2 hover:bg-gray-100/50\",\"children\":[\"$\",\"$Le\",null,{\"href\":\"/components/signin\",\"children\":[\"$\",\"div\",null,{\"className\":\"rounded-t-md border border-gray-200 bg-white\",\"children\":[[\"$\",\"$Lf\",null,{\"src\":\"/files/application/signin.png\",\"height\":100,\"width\":200,\"alt\":\"Sign In\",\"className\":\"w-full rounded-md object-cover\"}],[\"$\",\"hr\",null,{}],[\"$\",\"p\",null,{\"className\":\"mt-2 p-2 pt-0 text-sm font-semibold text-gray-600\",\"children\":[\"Sign In\",\" components\"]}]]}]}]}],[\"$\",\"div\",\"Sign Up\",{\"className\":\"rounded-md p-2 hover:bg-gray-100/50\",\"children\":[\"$\",\"$Le\",null,{\"href\":\"/components/signup\",\"children\":[\"$\",\"div\",null,{\"className\":\"rounded-t-md border border-gray-200 bg-white\",\"children\":[[\"$\",\"$Lf\",null,{\"src\":\"/files/application/signup.png\",\"height\":100,\"width\":200,\"alt\":\"Sign Up\",\"className\":\"w-full rounded-md object-cover\"}],[\"$\",\"hr\",null,{}],[\"$\",\"p\",null,{\"className\":\"mt-2 p-2 pt-0 text-sm font-semibold text-gray-600\",\"children\":[\"Sign Up\",\" components\"]}]]}]}]}],[\"$\",\"div\",\"Tables\",{\"className\":\"rounded-md p-2 hover:bg-gray-100/50\",\"children\":[\"$\",\"$Le\",null,{\"href\":\"/components/tables\",\"children\":[\"$\",\"div\",null,{\"className\":\"rounded-t-md border border-gray-200 bg-white\",\"children\":[[\"$\",\"$Lf\",null,{\"src\":\"/files/application/table.png\",\"height\":100,\"width\":200,\"alt\":\"Tables\",\"className\":\"w-full rounded-md object-cover\"}],[\"$\",\"hr\",null,{}],[\"$\",\"p\",null,{\"className\":\"mt-2 p-2 pt-0 text-sm font-semibold text-gray-600\",\"children\":[\"Tables\",\" components\"]}]]}]}]}]]}]}]]}],[\"$\",\"hr\",null,{\"className\":\"h-[2px] w-full bg-black\"}],[\"$\",\"div\",null,{\"className\":\"flex flex-col py-10 lg:flex-row lg:space-x-10\",\"children\":[[\"$\",\"div\",null,{\"className\":\"lg:w-[30%]\",\"children\":[[\"$\",\"$Lf\",null,{\"src\":\"/engineer.svg\",\"height\":100,\"width\":250,\"alt\":\"Man\"}],[\"$\",\"h1\",null,{\"className\":\"mt-4 font-heading text-2xl font-bold md:text-3xl\",\"children\":\"Marketing Components\"}],[\"$\",\"p\",null,{\"className\":\"mt-4 font-sans text-sm font-semibold text-gray-600\",\"children\":\"Explore our Marketing Components, designed for crafting dynamic web applications with versatile interface elements.\"}]]}],[\"$\",\"div\",null,{\"className\":\"mt-10 w-full lg:mt-0 lg:w-[70%]\",\"children\":[\"$\",\"div\",null,{\"className\":\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-4 lg:gap-y-4\",\"children\":[[\"$\",\"div\",\"CTA\",{\"className\":\"rounded-md p-2 hover:bg-gray-100/50\",\"children\":[\"$\",\"$Le\",null,{\"href\":\"/components/cta\",\"children\":[\"$\",\"div\",null,{\"className\":\"rounded-t-md border border-gray-200 bg-white\",\"children\":[[\"$\",\"$Lf\",null,{\"src\":\"/files/marketing/cta.png\",\"height\":100,\"width\":200,\"alt\":\"CTA\",\"className\":\"w-full rounded-md object-cover\"}],[\"$\",\"hr\",null,{}],[\"$\",\"p\",null,{\"className\":\"mt-2 p-2 pt-0 text-sm font-semibold text-gray-600\",\"children\":[\"CTA\",\" components\"]}]]}]}]}],[\"$\",\"div\",\"Error\",{\"className\":\"rounded-md p-2 hover:bg-gray-100/50\",\"children\":[\"$\",\"$Le\",null,{\"href\":\"/components/error\",\"children\":[\"$\",\"div\",null,{\"className\":\"rounded-t-md border border-gray-200 bg-white\",\"children\":[[\"$\",\"$Lf\",null,{\"src\":\"/files/marketing/error.png\",\"height\":100,\"width\":200,\"alt\":\"Error\",\"className\":\"w-full rounded-md object-cover\"}],[\"$\",\"hr\",null,{}],[\"$\",\"p\",null,{\"className\":\"mt-2 p-2 pt-0 text-sm font-semibold text-gray-600\",\"children\":[\"Error\",\" components\"]}]]}]}]}],[\"$\",\"div\",\"FAQs\",{\"className\":\"rounded-md p-2 hover:bg-gray-100/50\",\"children\":[\"$\",\"$Le\",null,{\"href\":\"/components/faq\",\"children\":[\"$\",\"div\",null,{\"className\":\"rounded-t-md border border-gray-200 bg-white\",\"children\":[[\"$\",\"$Lf\",null,{\"src\":\"/files/marketing/faq.png\",\"height\":100,\"width\":200,\"alt\":\"FAQs\",\"className\":\"w-full rounded-md object-cover\"}],[\"$\",\"hr\",null,{}],[\"$\",\"p\",null,{\"className\":\"mt-2 p-2 pt-0 text-sm font-semibold text-gray-600\",\"children\":[\"FAQs\",\" components\"]}]]}]}]}],[\"$\",\"div\",\"Feature\",{\"className\":\"rounded-md p-2 hover:bg-gray-100/50\",\"children\":[\"$\",\"$Le\",null,{\"href\":\"/components/feature\",\"children\":[\"$\",\"div\",null,{\"className\":\"rounded-t-md border border-gray-200 bg-white\",\"children\":[[\"$\",\"$Lf\",null,{\"src\":\"/files/marketing/features.png\",\"height\":100,\"width\":200,\"alt\":\"Feature\",\"className\":\"w-full rounded-md object-cover\"}],[\"$\",\"hr\",null,{}],[\"$\",\"p\",null,{\"className\":\"mt-2 p-2 pt-0 text-sm font-semibold text-gray-600\",\"children\":[\"Feature\",\" components\"]}]]}]}]}],[\"$\",\"div\",\"Footer\",{\"className\":\"rounded-md p-2 hover:bg-gray-100/50\",\"children\":[\"$\",\"$Le\",null,{\"href\":\"/components/footer\",\"children\":[\"$\",\"div\",null,{\"className\":\"rounded-t-md border border-gray-200 bg-white\",\"children\":[[\"$\",\"$Lf\",null,{\"src\":\"/files/marketing/footer.png\",\"height\":100,\"width\":200,\"alt\":\"Footer\",\"className\":\"w-full rounded-md object-cover\"}],[\"$\",\"hr\",null,{}],[\"$\",\"p\",null,{\"className\":\"mt-2 p-2 pt-0 text-sm font-semibold text-gray-600\",\"children\":[\"Footer\",\" components\"]}]]}]}]}],[\"$\",\"div\",\"Hero\",{\"className\":\"rounded-md p-2 hover:bg-gray-100/50\",\"children\":[\"$\",\"$Le\",null,{\"href\":\"/components/hero\",\"children\":[\"$\",\"div\",null,{\"className\":\"rounded-t-md border border-gray-200 bg-white\",\"children\":[[\"$\",\"$Lf\",null,{\"src\":\"/files/marketing/hero.png\",\"height\":100,\"width\":200,\"alt\":\"Hero\",\"className\":\"w-full rounded-md object-cover\"}],[\"$\",\"hr\",null,{}],[\"$\",\"p\",null,{\"className\":\"mt-2 p-2 pt-0 text-sm font-semibold text-gray-600\",\"children\":[\"Hero\",\" components\"]}]]}]}]}],[\"$\",\"div\",\"Newsletter\",{\"className\":\"rounded-md p-2 hover:bg-gray-100/50\",\"children\":[\"$\",\"$Le\",null,{\"href\":\"/components/newsletter\",\"children\":[\"$\",\"div\",null,{\"className\":\"rounded-t-md border border-gray-200 bg-white\",\"children\":[[\"$\",\"$Lf\",null,{\"src\":\"/files/marketing/newsletter.png\",\"height\":100,\"width\":200,\"alt\":\"Newsletter\",\"className\":\"w-full rounded-md object-cover\"}],[\"$\",\"hr\",null,{}],[\"$\",\"p\",null,{\"className\":\"mt-2 p-2 pt-0 text-sm font-semibold text-gray-600\",\"children\":[\"Newsletter\",\" components\"]}]]}]}]}],[\"$\",\"div\",\"Pricing\",{\"className\":\"rounded-md p-2 hover:bg-gray-100/50\",\"children\":[\"$\",\"$Le\",null,{\"href\":\"/components/pricing\",\"children\":[\"$\",\"div\",null,{\"className\":\"rounded-t-md border border-gray-200 bg-white\",\"children\":[[\"$\",\"$Lf\",null,{\"src\":\"/files/marketing/pricing.png\",\"height\":100,\"width\":200,\"alt\":\"Pricing\",\"className\":\"w-full rounded-md object-cover\"}],[\"$\",\"hr\",null,{}],[\"$\",\"p\",null,{\"className\":\"mt-2 p-2 pt-0 text-sm font-semibold text-gray-600\",\"children\":[\"Pricing\",\" components\"]}]]}]}]}],[\"$\",\"div\",\"Team\",{\"className\":\"rounded-md p-2 hover:bg-gray-100/50\",\"children\":[\"$\",\"$Le\",null,{\"href\":\"/components/team\",\"children\":[\"$\",\"div\",null,{\"className\":\"rounded-t-md border border-gray-200 bg-white\",\"children\":[[\"$\",\"$Lf\",null,{\"src\":\"/files/marketing/teams.png\",\"height\":100,\"width\":200,\"alt\":\"Team\",\"className\":\"w-full rounded-md object-cover\"}],[\"$\",\"hr\",null,{}],[\"$\",\"p\",null,{\"className\":\"mt-2 p-2 pt-0 text-sm font-semibold text-gray-600\",\"children\":[\"Team\",\" components\"]}]]}]}]}],[\"$\",\"div\",\"Testimonial\",{\"className\":\"rounded-md p-2 hover:bg-gray-100/50\",\"children\":[\"$\",\"$Le\",null,{\"href\":\"/components/testimonial\",\"children\":[\"$\",\"div\",null,{\"className\":\"rounded-t-md border border-gray-200 bg-white\",\"children\":[[\"$\",\"$Lf\",null,{\"src\":\"/files/marketing/testimonials.png\",\"height\":100,\"width\":200,\"alt\":\"Testimonial\",\"className\":\"w-full rounded-md object-cover\"}],[\"$\",\"hr\",null,{}],[\"$\",\"p\",null,{\"className\":\"mt-2 p-2 pt-0 text-sm font-semibold text-gray-600\",\"children\":[\"Testimonial\",\" components\"]}]]}]}]}]]}]}]]}],[\"$\",\"hr\",null,{\"className\":\"h-[2px] w-full bg-black\"}],[\"$\",\"div\",null,{\"className\":\"flex flex-col py-10 lg:flex-row lg:space-x-10\",\"children\":[[\"$\",\"div\",null,{\"className\":\"lg:w-[30%]\",\"children\":[[\"$\",\"$Lf\",null,{\"src\":\"/shopping-girl.svg\",\"height\":100,\"width\":250,\"alt\":\"Man\"}],[\"$\",\"h1\",null,{\"className\":\"mt-4 font-heading text-2xl font-bold md:text-3xl\",\"children\":\"Ecommerce Components\"}],[\"$\",\"p\",null,{\"className\":\"mt-4 font-sans text-sm font-semibold text-gray-600\",\"children\":\"Explore our Ecommerce Components, designed for crafting dynamic web applications with versatile interface elements.\"}]]}],[\"$\",\"div\",null,{\"className\":\"mt-10 w-full lg:mt-0 lg:w-[70%]\",\"children\":[\"$\",\"div\",null,{\"className\":\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-4 lg:gap-y-4\",\"children\":[[\"$\",\"div\",\"Cart\",{\"className\":\"rounded-md p-2 hover:bg-gray-100/50\",\"children\":[\"$\",\"$Le\",null,{\"href\":\"/components/cart\",\"children\":[\"$\",\"div\",null,{\"className\":\"rounded-t-md border border-gray-200 bg-white\",\"children\":[[\"$\",\"$Lf\",null,{\"src\":\"/files/ecommerce/cart.png\",\"height\":100,\"width\":200,\"alt\":\"Cart\",\"className\":\"w-full rounded-md object-cover\"}],[\"$\",\"hr\",null,{}],[\"$\",\"p\",null,{\"className\":\"mt-2 p-2 pt-0 text-sm font-semibold text-gray-600\",\"children\":[\"Cart\",\" components\"]}]]}]}]}],[\"$\",\"div\",\"Checkout\",{\"className\":\"rounded-md p-2 hover:bg-gray-100/50\",\"children\":[\"$\",\"$Le\",null,{\"href\":\"/components/checkout\",\"children\":[\"$\",\"div\",null,{\"className\":\"rounded-t-md border border-gray-200 bg-white\",\"children\":[[\"$\",\"$Lf\",null,{\"src\":\"/files/ecommerce/checkout.png\",\"height\":100,\"width\":200,\"alt\":\"Checkout\",\"className\":\"w-full rounded-md object-cover\"}],[\"$\",\"hr\",null,{}],[\"$\",\"p\",null,{\"className\":\"mt-2 p-2 pt-0 text-sm font-semibold text-gray-600\",\"children\":[\"Checkout\",\" components\"]}]]}]}]}],[\"$\",\"div\",\"Product Overview\",{\"className\":\"rounded-md p-2 hover:bg-gray-100/50\",\"children\":[\"$\",\"$Le\",null,{\"href\":\"/components/overview\",\"children\":[\"$\",\"div\",null,{\"className\":\"rounded-t-md border border-gray-200 bg-white\",\"children\":[[\"$\",\"$Lf\",null,{\"src\":\"/files/ecommerce/overview.png\",\"height\":100,\"width\":200,\"alt\":\"Product Overview\",\"className\":\"w-full rounded-md object-cover\"}],[\"$\",\"hr\",null,{}],[\"$\",\"p\",null,{\"className\":\"mt-2 p-2 pt-0 text-sm font-semibold text-gray-600\",\"children\":[\"Product Overview\",\" components\"]}]]}]}]}],[\"$\",\"div\",\"Filters\",{\"className\":\"rounded-md p-2 hover:bg-gray-100/50\",\"children\":[\"$\",\"$Le\",null,{\"href\":\"/components/filter\",\"children\":[\"$\",\"div\",null,{\"className\":\"rounded-t-md border border-gray-200 bg-white\",\"children\":[[\"$\",\"$Lf\",null,{\"src\":\"/files/ecommerce/filter.png\",\"height\":100,\"width\":200,\"alt\":\"Filters\",\"className\":\"w-full rounded-md object-cover\"}],[\"$\",\"hr\",null,{}],[\"$\",\"p\",null,{\"className\":\"mt-2 p-2 pt-0 text-sm font-semibold text-gray-600\",\"children\":[\"Filters\",\" components\"]}]]}]}]}],[\"$\",\"div\",\"Orders\",{\"className\":\"rounded-md p-2 hover:bg-gray-100/50\",\"children\":[\"$\",\"$Le\",null,{\"href\":\"/components/order\",\"children\":[\"$\",\"div\",null,{\"className\":\"rounded-t-md border border-gray-200 bg-white\",\"children\":[[\"$\",\"$Lf\",null,{\"src\":\"/files/ecommerce/order.png\",\"height\":100,\"width\":200,\"alt\":\"Orders\",\"className\":\"w-full rounded-md object-cover\"}],[\"$\",\"hr\",null,{}],[\"$\",\"p\",null,{\"className\":\"mt-2 p-2 pt-0 text-sm font-semibold text-gray-600\",\"children\":[\"Orders\",\" components\"]}]]}]}]}],[\"$\",\"div\",\"Products\",{\"className\":\"rounded-md p-2 hover:bg-gray-100/50\",\"children\":[\"$\",\"$Le\",null,{\"href\":\"/components/product\",\"children\":[\"$\",\"div\",null,{\"className\":\"rounded-t-md border border-gray-200 bg-white\",\"children\":[[\"$\",\"$Lf\",null,{\"src\":\"/files/ecommerce/product.png\",\"height\":100,\"width\":200,\"alt\":\"Products\",\"className\":\"w-full rounded-md object-cover\"}],[\"$\",\"hr\",null,{}],[\"$\",\"p\",null,{\"className\":\"mt-2 p-2 pt-0 text-sm font-semibold text-gray-600\",\"children\":[\"Products\",\" components\"]}]]}]}]}]]}]}]]}]]}]\n"])
</script>