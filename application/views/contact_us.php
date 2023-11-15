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
            <div>
                <div class="mx-auto max-w-7xl px-4">
                    <div class="mx-auto max-w-7xl py-12 md:py-24">
                        <div class="grid items-center justify-items-center gap-x-4 gap-y-10 lg:grid-cols-2">
                            <div class="flex items-center justify-center">
                                <div class="px-2 md:px-12">
                                    <p class="text-2xl font-bold text-gray-900 md:text-4xl">
                                        Get in touch
                                    </p>
                                    <p class="mt-4 text-lg text-gray-600">
                                        Our friendly team would love to hear from you.
                                    </p>
                                    <form action="" class="mt-8 space-y-4">
                                        <div class="grid w-full gap-y-4 md:gap-x-4 lg:grid-cols-2">
                                            <div class="grid w-full  items-center gap-1.5">
                                                <label
                                                    class="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                    for="first_name">
                                                    First Name
                                                </label>
                                                <input
                                                    class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                                                    type="text" id="first_name" placeholder="First Name" />
                                            </div>
                                            <div class="grid w-full  items-center gap-1.5">
                                                <label
                                                    class="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                    for="last_name">
                                                    Last Name
                                                </label>
                                                <input
                                                    class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                                                    type="text" id="last_name" placeholder="Last Name" />
                                            </div>
                                        </div>
                                        <div class="grid w-full  items-center gap-1.5">
                                            <label
                                                class="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                for="email">
                                                Email
                                            </label>
                                            <input
                                                class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                                                type="text" id="email" placeholder="Email" />
                                        </div>
                                        <div class="grid w-full  items-center gap-1.5">
                                            <label
                                                class="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                for="phone_number">
                                                Phone number
                                            </label>
                                            <input
                                                class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                                                type="tel" id="phone_number" placeholder="Phone number" />
                                        </div>
                                        <div class="grid w-full  items-center gap-1.5">
                                            <label
                                                class="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                for="message">
                                                Message
                                            </label>
                                            <textarea
                                                class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                                                id="message" placeholder="Leave us a message" cols="3"></textarea>
                                        </div>
                                        <button type="button"
                                            class="w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
                                            Send Message
                                        </button>
                                    </form>
                                </div>
                            </div>
                            <img alt="Contact us" class="hidden max-h-full w-full rounded-lg object-cover lg:block"
                                src="https://images.unsplash.com/photo-1511376777868-611b54f68947?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                        </div>
                    </div>
                </div>

                <?php $this->load->view('Assets/footer.php');?>

            </div>


        </div>



    </div>
    <script src="/src/chunks/webpack-6fc121c1bbfee0c0.js" async=""></script>
    <script src="/src/chunks/9b340135-7a2a74c0da015a18.js" async=""></script>
    <script src="/src/chunks/6549-ccfcce00de83b1aa.js" async=""></script>
    <script src="/src/chunks/main-app-e9ace43a1cae92f0.js" async=""></script>
</body>

</html>