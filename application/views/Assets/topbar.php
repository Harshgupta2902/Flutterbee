<header class="container sticky top-0 z-40 border-b-2 bg-white">
      <div class="flex h-20 items-center justify-between py-6">
        <div class="flex gap-6 md:gap-10">
          <a class="hidden items-center space-x-2 md:flex" href="<?php echo base_url('Home/index') ?>">
            <div class="inline-flex items-center space-x-2" style="cursor: pointer;"><img src="<?php echo base_url('Assets/assets/svg/hero.svg')?>"
                alt="logo" class="h-auto w-10">
              <span class="font-bold">FlutterBee</span>
            </div>
          </a>
          <nav class="hidden gap-6 md:flex">
            <a class="flex items-center text-lg font-semibold transition-colors sm:text-sm"
              href="<?php echo base_url('Home/getStarted') ?>">Getting Started</a>
            <a class="flex items-center text-lg font-semibold transition-colors sm:text-sm"
              href="<?php echo base_url('Home/components') ?>">Components</a>
            <a class="flex items-center text-lg font-semibold transition-colors sm:text-sm" href="<?php echo base_url('Home/join') ?>">Join
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
