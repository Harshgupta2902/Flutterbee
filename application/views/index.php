<!DOCTYPE html>
<html lang="en">

<head>
  <meta charSet="utf-8" />
  <link rel="preload" as="font" href="<?php echo base_url('Assets/src/media/2aaf0723e720e8b9-s.p.woff2') ?>" crossorigin="" type="font/woff2" />
  <link rel="preload" as="font" href="<?php echo base_url('Assets/src/media/90475aac776488b6-s.p.woff2') ?>" crossorigin="" type="font/woff2" />
  
  <link rel="stylesheet" href="<?php echo base_url('Assets/src/css/fe9f8ebb655ca26f.css')?>" data-precedence="next" />
  <script async="" defer="" data-website-id="1f3acb4e-518d-4043-919c-cdcc62d557dd"
    src="https://find-coder-analytics.vercel.app/umami.js"></script>
  <title>Flutter Bee</title>
  <meta name="description" content="A Flutter Component Tools." />
  <meta name="keywords" content="Flutter,Dart, Components" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta property="og:title" content="FlutterBee" />
  <meta property="og:description" content="A Flutter Component Tools." />
  <meta property="og:site_name" content="FlutterBee" />
  <meta property="og:locale" content="en_US" />
  <meta property="og:type" content="website" />
  <meta name="next-size-adjust" />
  <script src="<?php echo base_url('Assets/src/chunks/polyfills-c67a75d1b6f99dc8.js') ?>" noModule=""></script>
  <script src="https://cdn.tailwindcss.com"></script>
</head>

<body class="min-h-screen bg-white font-sans antialiased __variable_0ec1f4 __variable_deb966">
  <div class="flex min-h-screen flex-col">

    <!-- ------------------------------------------------------------HEADER------------------------------------------------------------ -->

    <header class="container sticky top-0 z-40 border-b-2 bg-white">
      <div class="flex h-20 items-center justify-between py-6">
        <div class="flex gap-6 md:gap-10">
          <a class="hidden items-center space-x-2 md:flex" href="/">
            <div class="inline-flex items-center space-x-2" style="cursor: pointer;"><img src="<?php echo base_url('Assets/assets/svg/hero.svg')?>"
                alt="logo" class="h-auto w-10">
              <span class="font-bold">FlutterBee</span>
            </div>
          </a>
          <nav class="hidden gap-6 md:flex">
            <a class="flex items-center text-lg font-semibold transition-colors sm:text-sm"
              href="<?php echo base_url('Welcome/getStarted') ?>">Getting Started</a>
            <a class="flex items-center text-lg font-semibold transition-colors sm:text-sm"
              href="<?php echo base_url('Welcome/components') ?>">Components</a>
            <a class="flex items-center text-lg font-semibold transition-colors sm:text-sm" href="<?php echo base_url('Welcome/join') ?>">Join
              Us</a>
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
              <a class="flex items-center space-x-2" href="/"><svg width="50" height="56" viewBox="0 0 50 56"
                  fill="none" xmlns="http://www.w3.org/2000/svg" class="h-8 w-8">
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


    <div class="flex flex-col min-h-screen">
      <main class="flex-1">
        <div class>
          <!-- ------------------------------------------------------------HOME PAGE BANNER------------------------------------------------------------ -->

          <div class="mx-auto mt-16 max-w-7xl px-2"><img src="<?php echo base_url('Assets/assets/svg/hero.svg')?>" alt="logo"
              class="h-auto w-96 pt-12  md:pt-24">
            <div class="flex flex-col space-y-8">
              <p class="text-3xl font-bold text-gray-900 md:text-5xl md:leading-10">Build Apps using FlutterBee
                Components</p>
              <p class="max-w-4xl text-base text-gray-600 md:text-xl">Unleashing Creativity, One Ready-to-Use &
                Re-designable
                Component at a Time, in the World of Flutter Development.</p>
            </div><button type="button"
              class="mt-4 mb-8 rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">view
              components</button>
            <hr class="w-full bg-black">
          </div>

          <!-- ------------------------------------------------------------FEATURES------------------------------------------------------------ -->


          <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-12 ">
            <div class="mx-auto max-w-xl text-center">
              <h2 class="mt-6 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Features</h2>
            </div>
            <div class="mt-12 grid grid-cols-1 gap-y-8 text-center sm:grid-cols-2 sm:gap-12 lg:grid-cols-3">
              <div class="block max-w-sm p-6 bg-white border border-white-200 rounded-lg shadow ">
                <div>
                  <div class="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100"><svg
                      xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                      class="h-9 w-9  text-gray-700">
                      <line x1="12" x2="12" y1="2" y2="22"></line>
                      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                    </svg></div>
                  <h3 class="mt-8 text-lg font-semibold text-black">Customizable Widgets</h3>
                  <p class="mt-4 text-sm text-gray-600">Easily customise FlutterBee elements to fit the look and feel of
                    your app..</p>
                </div>
              </div>
              <div class="block max-w-sm p-6 bg-white border border-white-200 rounded-lg shadow ">
                <div>
                  <div class="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100"><svg
                      xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                      class="h-9 w-9  text-gray-700">
                      <rect width="14" height="20" x="5" y="2" rx="2" ry="2"></rect>
                      <path d="M12 18h.01"></path>
                    </svg></div>
                  <h3 class="mt-8 text-lg font-semibold text-black">Responsive by Design</h3>
                  <p class="mt-4 text-sm text-gray-600">We Assure a flawless user experience on all devices that have
                    FlutterBee components built in.</p>
                </div>
              </div>
              <div class="block max-w-sm p-6 bg-white border border-white-200 rounded-lg shadow ">
                <div>
                  <div class="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100"><svg
                      xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                      class="h-9 w-9  text-gray-700">
                      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                    </svg></div>
                  <h3 class="mt-8 text-lg font-semibold text-black">Effortless Integration</h3>
                  <p class="mt-4 text-sm text-gray-600">Quickly incorporate FlutterBee into your ongoing projects to cut
                    down on complexity and development time..</p>
                </div>
              </div>
              <div class="block max-w-sm p-6 bg-white border border-white-200 rounded-lg shadow ">
                <div>
                  <div class="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100"><svg
                      xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                      class="h-9 w-9  text-gray-700">
                      <polyline points="16 18 22 12 16 6"></polyline>
                      <polyline points="8 6 2 12 8 18"></polyline>
                    </svg></div>
                  <h3 class="mt-8 text-lg font-semibold text-black">Code Copy Convenience</h3>
                  <p class="mt-4 text-sm text-gray-600">FlutterBee makes it simple to copy component code snippets to
                    your clipboard, which expedites the implementation process..</p>
                </div>
              </div>
              <div class="block max-w-sm p-6 bg-white border border-white-200 rounded-lg shadow ">
                <div>
                  <div class="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100"><svg
                      xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                      class="h-9 w-9  text-gray-700">
                      <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
                      <path d="M3 3v5h5"></path>
                      <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"></path>
                      <path d="M16 16h5v5"></path>
                    </svg></div>
                  <h3 class="mt-8 text-lg font-semibold text-black">Regular Updates</h3>
                  <p class="mt-4 text-sm text-gray-600">With regular updates from an active group, you can stay up to
                    up-to-date on the most recent changes in Flutter development and ensure compliance with the newest
                    practises and trends..</p>
                </div>
              </div>
              <div class="block max-w-sm p-6 bg-white border border-white-200 rounded-lg shadow ">
                <div>
                  <div class="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100"><svg
                      xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                      class="h-9 w-9  text-gray-700">
                      <rect x="3" y="8" width="18" height="4" rx="1"></rect>
                      <path d="M12 8v13"></path>
                      <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"></path>
                      <path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"></path>
                    </svg></div>
                  <h3 class="mt-8 text-lg font-semibold text-black">Free and Open-Source</h3>
                  <p class="mt-4 text-sm text-gray-600">Take use of FlutterBee's free features and help the open-source
                    community improve the library for everyone by contributing..</p>
                </div>
              </div>
            </div>
          </div>

          <!-- ------------------------------------------------------------FOOTER------------------------------------------------------------ -->


          <div class="max-w-7xl mx-auto text-center mt-12">
            <footer class="px-4 py-4 flex flex-col items-center">
              <div class="flex flex-col md:flex-row md:items-center"><img src="<?php echo base_url('Assets/assets/svg/hero.svg')?>" alt="logo"
                  class="h-auto w-10">
                <div class="mt-2 grow md:ml-4 md:mt-0">
                  <p class="text-base font-semibold text-gray-700">Built with ❤️ by developers for developers</p>
                </div>
              </div>
            </footer>
          </div>

        </div>
      </main>
    </div>


  </div>

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
  self.__next_f.push([1, "4:[[[\"$\",\"link\",\"0\",{\"rel\":\"stylesheet\",\"href\":\"/_next/static/css/fe9f8ebb655ca26f.css\",\"precedence\":\"next\"}]],[\"$\",\"$L5\",null,{\"assetPrefix\":\"\",\"initialCanonicalUrl\":\"/\",\"initialTree\":[\"\",{\"children\":[\"(landing)\",{\"children\":[\"__PAGE__\",{}]}]},\"$undefined\",\"$undefined\",true],\"initialHead\":[\"$L6\",[\"$\",\"meta\",null,{\"name\":\"next-size-adjust\"}]],\"globalErrorComponent\":\"$7\",\"notFound\":[\"$\",\"html\",null,{\"lang\":\"en\",\"suppressHydrationWarning\":true,\"children\":[[\"$\",\"head\",null,{}],[\"$\",\"script\",null,{\"async\":true,\"defer\":true,\"data-website-id\":\"1f3acb4e-518d-4043-919c-cdcc62d557dd\",\"src\":\"https://find-coder-analytics.vercel.app/umami.js\"}],[\"$\",\"body\",null,{\"className\":\"min-h-screen bg-white font-sans antialiased __variable_0ec1f4 __variable_deb966\",\"children\":[\"$undefined\",[[\"$\",\"title\",null,{\"children\":\"404: This page could not be found.\"}],[\"$\",\"div\",null,{\"style\":{\"fontFamily\":\"system-ui,\\\"Segoe UI\\\",Roboto,Helvetica,Arial,sans-serif,\\\"Apple Color Emoji\\\",\\\"Segoe UI Emoji\\\"\",\"height\":\"100vh\",\"textAlign\":\"center\",\"display\":\"flex\",\"flexDirection\":\"column\",\"alignItems\":\"center\",\"justifyContent\":\"center\"},\"children\":[\"$\",\"div\",null,{\"children\":[[\"$\",\"style\",null,{\"dangerouslySetInnerHTML\":{\"__html\":\"body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}\"}}],[\"$\",\"h1\",null,{\"className\":\"next-error-h1\",\"style\":{\"display\":\"inline-block\",\"margin\":\"0 20px 0 0\",\"padding\":\"0 23px 0 0\",\"fontSize\":24,\"fontWeight\":500,\"verticalAlign\":\"top\",\"lineHeight\":\"49px\"},\"children\":\"404\"}],[\"$\",\"div\",null,{\"style\":{\"display\":\"inline-block\"},\"children\":[\"$\",\"h2\",null,{\"style\":{\"fontSize\":14,\"fontWeight\":400,\"lineHeight\":\"49px\",\"margin\":0},\"children\":\"This page could not be found.\"}]}]]}]}]]]}]]}],\"asNotFound\":false,\"children\":[[\"$\",\"html\",null,{\"lang\":\"en\",\"suppressHydrationWarning\":true,\"children\":[[\"$\",\"head\",null,{}],[\"$\",\"script\",null,{\"async\":true,\"defer\":true,\"data-website-id\":\"1f3acb4e-518d-4043-919c-cdcc62d557dd\",\"src\":\"https://find-coder-analytics.vercel.app/umami.js\"}],[\"$\",\"body\",null,{\"className\":\"min-h-screen bg-white font-sans antialiased __variable_0ec1f4 __variable_deb966\",\"children\":[\"$\",\"$L8\",null,{\"parallelRouterKey\":\"children\",\"segmentPath\":[\"children\"],\"error\":\"$undefined\",\"errorStyles\":\"$undefined\",\"loading\":\"$undefined\",\"loadingStyles\":\"$undefined\",\"hasLoading\":false,\"template\":[\"$\",\"$L9\",null,{}],\"templateStyles\":\"$undefined\",\"notFound\":\"$undefined\",\"notFoundStyles\":\"$undefined\",\"asNotFound\":false,\"childProp\":{\"current\":[\"$La\",null],\"segment\":\"(landing)\"},\"styles\":[]}]}]]}],null]}]]\n"])
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
  self.__next_f.push([1, "a:[\"$\",\"div\",null,{\"className\":\"flex min-h-screen flex-col\",\"children\":[[\"$\",\"header\",null,{\"className\":\"container sticky top-0 z-40 border-b-2 bg-white\",\"children\":[\"$\",\"div\",null,{\"className\":\"flex h-20 items-center justify-between py-6\",\"children\":[[\"$\",\"$Lb\",null,{\"items\":[{\"title\":\"Getting Started\",\"href\":\"/getting-started\"},{\"title\":\"Components\",\"href\":\"/components\"},{\"title\":\"Page Examples\",\"href\":\"/pages\"}]}],[\"$\",\"nav\",null,{\"children\":[\"$\",\"$Lc\",null,{}]}]]}]}],[\"$\",\"main\",null,{\"className\":\"flex-1\",\"children\":[\"$\",\"$L8\",null,{\"parallelRouterKey\":\"children\",\"segmentPath\":[\"children\",\"(landing)\",\"children\"],\"error\":\"$undefined\",\"errorStyles\":\"$undefined\",\"loading\":\"$undefined\",\"loadingStyles\":\"$undefined\",\"hasLoading\":false,\"template\":[\"$\",\"$L9\",null,{}],\"templateStyles\":\"$undefined\",\"notFound\":\"$undefined\",\"notFoundStyles\":\"$undefined\",\"asNotFound\":false,\"childProp\":{\"current\":[\"$Ld\",null],\"segment\":\"__PAGE__\"},\"styles\":[]}]}],[\"$\",\"div\",null,{\"className\":\"mx-auto max-w-7xl px-10 py-6 text-start md:px-0\",\"children\":[\"$\",\"h6\",null,{\"children\":[\"Build With\",\" \",[\"$\",\"$Le\",null,{\"href\":\"https://nextjs.org\",\"children\":[\"$\",\"strong\",null,{\"children\":\"NextJs 13\"}]}],\",\",[\"$\",\"$Le\",null,{\"href\":\"https://tailwindcss.com/\",\"children\":[\"$\",\"strong\",null,{\"children\":\"TailwindCSS\"}]}],\". Illustrations by\",\" \",[\"$\",\"$Le\",null,{\"href\":\"https://popsy.co\",\"children\":[\"$\",\"strong\",null,{\"children\":\"Popsy\"}]}]]}]}]]}]\n"])
</script>
<script>
  self.__next_f.push([1, "6:[[[\"$\",\"meta\",null,{\"charSet\":\"utf-8\"}],[\"$\",\"title\",null,{\"children\":\"DevUI\"}],[\"$\",\"meta\",null,{\"name\":\"description\",\"content\":\"An tailwind css component library.\"}],null,null,[\"$\",\"link\",null,{\"rel\":\"manifest\",\"href\":\"https://devui.io/images/site.webmanifest\"}],null,[\"$\",\"meta\",null,{\"name\":\"keywords\",\"content\":\"Next.js,React,Tailwind CSS,Html\"}],null,null,null,[\"$\",\"meta\",null,{\"name\":\"viewport\",\"content\":\"width=device-width, initial-scale=1\"}],null,null,null,null,null,null,null,null,null,null,[]],[null,null,null,null],null,null,[null,null,null,null,null],null,[null,[\"$\",\"meta\",null,{\"property\":\"og:title\",\"content\":\"DevUI\"}],[\"$\",\"meta\",null,{\"property\":\"og:description\",\"content\":\"An tailwind css component library.\"}],[\"$\",\"meta\",null,{\"property\":\"og:url\",\"content\":\"https://devui.io/\"}],[\"$\",\"meta\",null,{\"property\":\"og:site_name\",\"content\":\"DevUI\"}],[\"$\",\"meta\",null,{\"property\":\"og:locale\",\"content\":\"en_US\"}],null,null,null,null,null,null,null,null,null,[\"$\",\"meta\",null,{\"property\":\"og:type\",\"content\":\"website\"}]],null,null,[[[\"$\",\"link\",null,{\"rel\":\"shortcut icon\",\"href\":\"/images/favicon-16x16.png\"}]],[[\"$\",\"link\",null,{\"rel\":\"icon\",\"href\":\"/images/favicon.ico\"}]],[[\"$\",\"link\",null,{\"rel\":\"apple-touch-icon\",\"href\":\"/images/apple-touch-icon.png\"}]],null]]\n"])
</script>
<script>
  self.__next_f.push([1, "f:I{\"id\":\"9991\",\"chunks\":[\"9774:static/chunks/framework-0459c8ba67ce1751.js\",\"8813:static/chunks/5d0aeb23-334229b51143f5b3.js\",\"218:static/chunks/d5fc2502-cb30c64e87f43e44.js\",\"3631:static/chunks/733be52f-dc0a84967583f74d.js\",\"4275:static/chunks/4275-781dd566ed7ac61a.js\",\"9991:static/chunks/9991-39b1dac26bc96b35.js\",\"493:static/chunks/493-9f611e166626f47f.js\",\"8835:static/chunks/8835-8dcd056c7a9777ce.js\",\"8469:static/chunks/app/(components)/components/(marketing)/testimonial/page-edeeddc7be1e60b6.js\"],\"name\":\"\",\"async\":false}\n"])
</script>
<script>
  self.__next_f.push([1, "d:[[\"$\",\"section\",null,{\"aria-labelledby\":\"hero-banner\",\"children\":[\"$\",\"div\",null,{\"className\":\"mx-auto flex flex-col items-start gap-4 px-6 pb-8 md:pb-12 lg:w-[52rem] lg:px-0 lg:pb-24\",\"children\":[[\"$\",\"$Lf\",null,{\"src\":\"/hero.svg\",\"alt\":\"Hero\",\"width\":250,\"height\":100,\"className\":\"rounded-lg md:mt-10\"}],[\"$\",\"h1\",null,{\"className\":\"font-heading text-3xl font-bold leading-[1.1] md:text-5xl lg:text-7xl\",\"children\":\"Ship websites faster with DevUI component library\"}],[\"$\",\"p\",null,{\"className\":\"max-w-[42rem] leading-normal text-slate-700 sm:text-xl sm:leading-8\",\"children\":[\"DevUI is a comprehensive and easy-to-use open-source UI component library ( powered by\",\" \",[\"$\",\"strong\",null,{\"children\":\"TailwindCSS\"}],\") designed to enhance your productivity as a developer\",\" \"]}],[\"$\",\"div\",null,{\"className\":\"mt-2 flex space-x-2\",\"children\":[\"$\",\"$Le\",null,{\"href\":\"/components\",\"children\":[\"$\",\"button\",null,{\"className\":\"inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-primary/90 h-10 py-2 px-4 bg-black text-white\",\"children\":\"View Components\"}]}]}]]}]}],[\"$\",\"hr\",null,{\"className\":\"w-full bg-black\"}],[\"$\",\"section\",null,{\"aria-label\":\"features\",\"children\":[\"$\",\"div\",null,{\"className\":\"mx-auto flex flex-col items-start gap-4 px-6 py-8 md:py-12 lg:w-[62rem] lg:px-0 lg:py-24\",\"children\":[[\"$\",\"h2\",null,{\"className\":\"font-heading text-3xl font-bold leading-[1.1] md:text-5xl\",\"children\":\"Features\"}],[\"$\",\"div\",null,{\"className\":\"mt-8 grid grid-cols-1 gap-6 md:grid-cols-3\",\"children\":[[\"$\",\"div\",\"Customizable\",{\"className\":\"rounded-md border bg-gray-100 p-3\",\"children\":[\"$\",\"div\",null,{\"className\":\"flex h-full flex-col gap-4 rounded-md bg-black p-4\",\"children\":[[\"$\",\"div\",null,{\"className\":\"flex h-12 w-12 items-center justify-center rounded-md bg-gray-200\",\"children\":[\"$\",\"svg\",null,{\"xmlns\":\"http://www.w3.org/2000/svg\",\"width\":24,\"height\":24,\"viewBox\":\"0 0 24 24\",\"fill\":\"none\",\"stroke\":\"currentColor\",\"strokeWidth\":2,\"strokeLinecap\":\"round\",\"strokeLinejoin\":\"round\",\"className\":\"lucide lucide-cloud-cog\",\"children\":[[\"$\",\"path\",\"19hoja\",{\"d\":\"M20 16.2A4.5 4.5 0 0 0 17.5 8h-1.8A7 7 0 1 0 4 14.9\"}],[\"$\",\"circle\",\"1spfwm\",{\"cx\":\"12\",\"cy\":\"17\",\"r\":\"3\"}],[\"$\",\"path\",\"176q98\",{\"d\":\"M12 13v1\"}],[\"$\",\"path\",\"1wcdkc\",{\"d\":\"M12 20v1\"}],[\"$\",\"path\",\"y560le\",{\"d\":\"M16 17h-1\"}],[\"$\",\"path\",\"1lfe9z\",{\"d\":\"M9 17H8\"}],[\"$\",\"path\",\"12ytk1\",{\"d\":\"m15 14-.88.88\"}],[\"$\",\"path\",\"1kmb4r\",{\"d\":\"M9.88 19.12 9 20\"}],[\"$\",\"path\",\"1ipjcf\",{\"d\":\"m15 20-.88-.88\"}],[\"$\",\"path\",\"c4uok7\",{\"d\":\"M9.88 14.88 9 14\"}],\"$undefined\"]}]}],[\"$\",\"h3\",null,{\"className\":\"text-xl font-bold text-gray-100\",\"children\":\"Customizable\"}],[\"$\",\"p\",null,{\"className\":\"font-sans text-sm font-medium text-gray-400\",\"children\":\"DevUI components are designed to be highly customizable and extendable. You can easily change the styles of the components to match your brand or product.\"}]]}]}],[\"$\",\"div\",\"Responsive design\",{\"className\":\"rounded-md border bg-gray-100 p-3\",\"children\":[\"$\",\"div\",null,{\"className\":\"flex h-full flex-col gap-4 rounded-md bg-black p-4\",\"children\":[[\"$\",\"div\",null,{\"className\":\"flex h-12 w-12 items-center justify-center rounded-md bg-gray-200\",\"children\":[\"$\",\"svg\",null,{\"xmlns\":\"http://www.w3.org/2000/svg\",\"width\":24,\"height\":24,\"viewBox\":\"0 0 24 24\",\"fill\":\"none\",\"stroke\":\"currentColor\",\"strokeWidth\":2,\"strokeLinecap\":\"round\",\"strokeLinejoin\":\"round\",\"className\":\"lucide lucide-screen-share\",\"children\":[[\"$\",\"path\",\"i8wdob\",{\"d\":\"M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3\"}],[\"$\",\"path\",\"1ev6f3\",{\"d\":\"M8 21h8\"}],[\"$\",\"path\",\"1riwvh\",{\"d\":\"M12 17v4\"}],[\"$\",\"path\",\"fqif7o\",{\"d\":\"m17 8 5-5\"}],[\"$\",\"path\",\"1o3tu8\",{\"d\":\"M17 3h5v5\"}],\"$undefined\"]}]}],[\"$\",\"h3\",null,{\"className\":\"text-xl font-bold text-gray-100\",\"children\":\"Responsive design\"}],[\"$\",\"p\",null,{\"className\":\"font-sans text-sm font-medium text-gray-400\",\"children\":\"All of the components are designed with responsiveness in mind, so you can be confident that your interfaces will look great on any device.\"}]]}]}],[\"$\",\"div\",\"Easy integration\",{\"className\":\"rounded-md border bg-gray-100 p-3\",\"children\":[\"$\",\"div\",null,{\"className\":\"flex h-full flex-col gap-4 rounded-md bg-black p-4\",\"children\":[[\"$\",\"div\",null,{\"className\":\"flex h-12 w-12 items-center justify-center rounded-md bg-gray-200\",\"children\":[\"$\",\"svg\",null,{\"xmlns\":\"http://www.w3.org/2000/svg\",\"width\":24,\"height\":24,\"viewBox\":\"0 0 24 24\",\"fill\":\"none\",\"stroke\":\"currentColor\",\"strokeWidth\":2,\"strokeLinecap\":\"round\",\"strokeLinejoin\":\"round\",\"className\":\"lucide lucide-wrench\",\"children\":[[\"$\",\"path\",\"cbrjhi\",{\"d\":\"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z\"}],\"$undefined\"]}]}],[\"$\",\"h3\",null,{\"className\":\"text-xl font-bold text-gray-100\",\"children\":\"Easy integration\"}],[\"$\",\"p\",null,{\"className\":\"font-sans text-sm font-medium text-gray-400\",\"children\":\"DevUI is designed to integrate seamlessly with your existing projects, allowing you to get up and running quickly.\"}]]}]}],[\"$\",\"div\",\"Copy to clipboard\",{\"className\":\"rounded-md border bg-gray-100 p-3\",\"children\":[\"$\",\"div\",null,{\"className\":\"flex h-full flex-col gap-4 rounded-md bg-black p-4\",\"children\":[[\"$\",\"div\",null,{\"className\":\"flex h-12 w-12 items-center justify-center rounded-md bg-gray-200\",\"children\":[\"$\",\"svg\",null,{\"xmlns\":\"http://www.w3.org/2000/svg\",\"width\":24,\"height\":24,\"viewBox\":\"0 0 24 24\",\"fill\":\"none\",\"stroke\":\"currentColor\",\"strokeWidth\":2,\"strokeLinecap\":\"round\",\"strokeLinejoin\":\"round\",\"className\":\"lucide lucide-copy\",\"children\":[[\"$\",\"rect\",\"1ma1o8\",{\"x\":\"9\",\"y\":\"9\",\"width\":\"13\",\"height\":\"13\",\"rx\":\"2\",\"ry\":\"2\"}],[\"$\",\"path\",\"pklvoz\",{\"d\":\"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1\"}],\"$undefined\"]}]}],[\"$\",\"h3\",null,{\"className\":\"text-xl font-bold text-gray-100\",\"children\":\"Copy to clipboard\"}],[\"$\",\"p\",null,{\"className\":\"font-sans text-sm font-medium text-gray-400\",\"children\":\"With DevUI, you can easily copy the code for any component directly to your clipboard, saving you time and effort.\"}]]}]}],[\"$\",\"div\",\"Constantly updated\",{\"className\":\"rounded-md border bg-gray-100 p-3\",\"children\":[\"$\",\"div\",null,{\"className\":\"flex h-full flex-col gap-4 rounded-md bg-black p-4\",\"children\":[[\"$\",\"div\",null,{\"className\":\"flex h-12 w-12 items-center justify-center rounded-md bg-gray-200\",\"children\":[\"$\",\"svg\",null,{\"xmlns\":\"http://www.w3.org/2000/svg\",\"width\":24,\"height\":24,\"viewBox\":\"0 0 24 24\",\"fill\":\"none\",\"stroke\":\"currentColor\",\"strokeWidth\":2,\"strokeLinecap\":\"round\",\"strokeLinejoin\":\"round\",\"className\":\"lucide lucide-code\",\"children\":[[\"$\",\"polyline\",\"z7tu5w\",{\"points\":\"16 18 22 12 16 6\"}],[\"$\",\"polyline\",\"1eg1df\",{\"points\":\"8 6 2 12 8 18\"}],\"$undefined\"]}]}],[\"$\",\"h3\",null,{\"className\":\"text-xl font-bold text-gray-100\",\"children\":\"Constantly updated\"}],[\"$\",\"p\",null,{\"className\":\"font-sans text-sm font-medium text-gray-400\",\"children\":\"DevUI is constantly updated by a community of developers, meaning that you can rely on the library to stay up-to-date with the latest design trends and best practices.\"}]]}]}],[\"$\",\"div\",\"Free and open-source\",{\"className\":\"rounded-md border bg-gray-100 p-3\",\"children\":[\"$\",\"div\",null,{\"className\":\"flex h-full flex-col gap-4 rounded-md bg-black p-4\",\"children\":[[\"$\",\"div\",null,{\"className\":\"flex h-12 w-12 items-center justify-center rounded-md bg-gray-200\",\"children\":[\"$\",\"svg\",null,{\"xmlns\":\"http://www.w3.org/2000/svg\",\"width\":24,\"height\":24,\"viewBox\":\"0 0 24 24\",\"fill\":\"none\",\"stroke\":\"currentColor\",\"strokeWidth\":2,\"strokeLinecap\":\"round\",\"strokeLinejoin\":\"round\",\"className\":\"lucide lucide-wallet\",\"children\":[[\"$\",\"path\",\"st805m\",{\"d\":\"M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h12v4\"}],[\"$\",\"path\",\"16cu1e\",{\"d\":\"M4 6v12c0 1.1.9 2 2 2h14v-4\"}],[\"$\",\"path\",\"lwd56p\",{\"d\":\"M18 12a2 2 0 0 0-2 2c0 1.1.9 2 2 2h4v-4h-4z\"}],\"$undefined\"]}]}],[\"$\",\"h3\",null,{\"className\":\"text-xl font-bold text-gray-100\",\"children\":\"Free and open-source\"}],[\"$\",\"p\",null,{\"className\":\"font-sans text-sm font-medium text-gray-400\",\"children\":\"DevUI is free to use, and its open-source nature means that you can contribute to the library and help make it even better.\"}]]}]}]]}]]}]}],[\"$\",\"hr\",null,{\"className\":\"w-full bg-black\"}],[\"$\",\"section\",null,{\"aria-labelledby\":\"open-source\",\"children\":[\"$\",\"div\",null,{\"className\":\"mx-auto flex flex-col items-start gap-4 px-6 py-8 md:py-12 lg:w-[52rem] lg:px-0\",\"children\":[[\"$\",\"$Lf\",null,{\"src\":\"/communication.svg\",\"alt\":\"Developers\",\"width\":250,\"height\":100,\"className\":\"rounded-lg md:mt-10\"}],[\"$\",\"h1\",null,{\"className\":\"font-heading text-2xl font-bold leading-[1.1] md:text-4xl lg:text-6xl\",\"children\":\"Made by Developers for the Community\"}],[\"$\",\"p\",null,{\"className\":\"max-w-[42rem] leading-normal text-slate-700 sm:text-xl sm:leading-8\",\"children\":\"Our library offers meticulously designed components, curated by developers, to accelerate the creation of visually stunning and fully functional interfaces.\"}],[\"$\",\"div\",null,{\"className\":\"mt-2 flex space-x-2\",\"children\":[\"$\",\"$Le\",null,{\"href\":\"/components\",\"children\":[\"$\",\"button\",null,{\"className\":\"inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background border border-input hover:bg-accent hover:text-accent-foreground h-10 py-2 px-4\",\"children\":\"Start Building\"}]}]}]]}]}],[\"$\",\"hr\",null,{\"className\":\"w-full bg-black\"}]]\n"])
</script>