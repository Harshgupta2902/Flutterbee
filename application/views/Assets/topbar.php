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
              href="<?php echo base_url('Home/utility') ?>">Components</a>
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
            <span class="font-heading text-xl font-extrabold sm:inline-block">FlutterBee</span>
          </button>
          <div
            class="animate-in slide-in-from-bottom-80 fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-md md:hidden">
            <div class="text-popover-foreground relative z-20 grid gap-6 rounded-md bg-white p-4 shadow-md">
              <a class="flex items-center space-x-2" href="<?php echo base_url('Home') ?>">
              <div class="inline-flex items-center space-x-2" style="cursor: pointer;"><img src="<?php echo base_url('Assets/assets/svg/hero.svg')?>"
                alt="logo" class="h-auto w-10">
              <span class="font-bold">FlutterBee</span>
            </div></a>
              <nav class="grid grid-flow-row auto-rows-max text-sm"><a
                  class="flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline"
                  href="<?php echo base_url('Home/getStarted') ?>">Getting Started</a><a
                  class="flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline"
                  href="<?php echo base_url('Home/utility') ?>">Components</a>
                <a class="flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline"
                  href="<?php echo base_url('Home/join') ?>">Join Us</a>
              </nav>
            </div>
          </div>
        </div>
        <nav>
        </nav>
      </div>
    </header>
