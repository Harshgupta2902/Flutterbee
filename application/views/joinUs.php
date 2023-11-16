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

        <div>
            <div class="mx-auto max-w-7xl px-4">
                <div class="flex flex-col items-center gap-x-4 gap-y-4 py-16 md:flex-row">
                    <div class="space-y-6">
                        <p class="text-sm font-semibold md:text-base">Join our team →</p>
                        <p class="text-3xl font-bold md:text-4xl">
                            We&#x27;re just getting started
                        </p>
                        <p class="text-base text-gray-600 md:text-lg">
                            Our philosophy is simple — hire a team of diverse, passionate people
                            and foster a culture that empowers you to do your best work.
                        </p>
                        <a href="<?php echo base_url('Home/contact') ?>">
                            <button type="button"
                            class="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
                            Join Now
                        </button>
                        </a>
                    </div>
                    <div class="md:mt-o mt-10 w-full">
                        <img src="https://images.unsplash.com/photo-1605165566807-508fb529cf3e?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2340&amp;q=80"
                            alt="Getting Started" class="rounded-lg" />
                    </div>
                </div>
            </div>
            <?php $this->load->view('Assets/footer.php');?>

        </div>



    </div>
</body>

</html>