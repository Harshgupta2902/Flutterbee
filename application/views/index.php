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
    <?php $this->load->view('Assets/topbar.php');?>

    <div class="flex flex-col min-h-screen">
      <main class="flex-1">
        <div class>
          <?php echo $first_name ?>
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

          <?php $this->load->view('Assets/footer.php');?>
        </div>
      </main>
    </div>
</div>
</body>
</html>