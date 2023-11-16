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


        <!-- ------------------------------------------------------------MAIN------------------------------------------------------------ -->

        <main class="flex-1">
            <div class="mx-auto max-w-7xl px-6 py-10 lg:px-4">
                <!-- ------------------------------------------------------------App Bar------------------------------------------------------------ -->

                <div class="flex flex-col pb-10 lg:flex-row lg:space-x-10">
                    <div class="lg:w-[30%]">
                        <img alt="WomenWithLaptop" loading="lazy" width="250" height="100" decoding="async"
                            data-nimg="1" style="color:transparent" src="<?php echo base_url('Assets/assets/svg/appbar.svg')?>" />
                        <h1 class="mt-4 font-heading text-2xl font-bold md:text-3xl">App Bar</h1>
                        <p class="mt-4 font-sans text-sm font-semibold text-gray-600">Explore our Flutter Based App-Bar
                            components, designed for ready-to-use in your developement.</p>
                    </div>
                    <div class="mt-10 w-full lg:mt-0 lg:w-[70%]">
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-4 lg:gap-y-4">

                        <?php foreach ($appBar as $appBar): ?>
                            <div class="rounded-md p-2 hover:bg-gray-100/50">
                                <?php $dataToSend = array('title' => $appBar['title'], 'gif' => $appBar['gif'], 'chunk' => $appBar['chunk']); ?>
                                <a href="<?php echo base_url('Home/components?data='. urlencode(json_encode($dataToSend)))?>">
                                    <div class="rounded-t-md border border-gray-200 bg-white">
                                        <img alt="Avatar" loading="lazy" width="150" height="80" decodin   g="async"
                                            data-nimg="1" class="w-full rounded-md object-cover"
                                            style="color:transparent"
                                            src="http://ixorainfotech.in/Foodonation/uploads/assets/<?php echo $appBar['image']?>" />
                                        <hr />
                                        <p class="mt-2 p-2 pt-0 text-sm font-semibold text-gray-600"><?php echo $appBar['title'] ?>
                                        </p>
                                    </div>
                                </a>
                            </div>
                        <?php endforeach; ?>
                        </div>
                    </div>
                </div>
                <hr class="h-[2px] w-full bg-black" />
                <!-- ------------------------------------------------------------UI------------------------------------------------------------ -->

                <div class="flex flex-col py-10 lg:flex-row lg:space-x-10">
                    <div class="lg:w-[30%]">
                        <img alt="Man" loading="lazy" width="250" height="100" decoding="async" data-nimg="1"
                            style="color:transparent" src="<?php echo base_url('Assets/assets/svg/ui.svg')?>" />
                        <h1 class="mt-4 font-heading text-2xl font-bold md:text-3xl">UI Components</h1>
                        <p class="mt-4 font-sans text-sm font-semibold text-gray-600">Explore our Flutter Based UI
                            Components,
                            designed for ready-to-use in your Applications.</p>
                    </div>
                    <div class="mt-10 w-full lg:mt-0 lg:w-[70%]">
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-4 lg:gap-y-4">
                        <?php foreach ($uiComponents as $uiComponents): ?>
                            <div class="rounded-md p-2 hover:bg-gray-100/50">
                                <?php $dataToSend = array('title' => $uiComponents['title'], 'gif' => $uiComponents['gif'], 'chunk' => $uiComponents['chunk']); ?>
                                <a href="<?php echo base_url('Home/components?data='. urlencode(json_encode($dataToSend)))?>">
                                    <div class="rounded-t-md border border-gray-200 bg-white">
                                        <img alt="Avatar" loading="lazy" width="150" height="80" decodin   g="async"
                                            data-nimg="1" class="w-full rounded-md object-cover"
                                            style="color:transparent"
                                            src="http://ixorainfotech.in/Foodonation/uploads/assets/<?php echo $uiComponents['image']?>" />
                                        <hr />
                                        <p class="mt-2 p-2 pt-0 text-sm font-semibold text-gray-600"><?php echo $uiComponents['title'] ?>
                                        </p>
                                    </div>
                                </a>
                            </div>
                        <?php endforeach; ?>
                        </div>
                    </div>
                </div>
                <hr class="h-[2px] w-full bg-black" />
                <!-- ------------------------------------------------------------Cards------------------------------------------------------------ -->

                <div class="flex flex-col py-10 lg:flex-row lg:space-x-10">
                    <div class="lg:w-[30%]">
                        <img alt="Man" loading="lazy" width="250" height="100" decoding="async" data-nimg="1"
                            style="color:transparent" src="<?php echo base_url('Assets/assets/svg/cards.svg')?>" />
                        <h1 class="mt-4 font-heading text-2xl font-bold md:text-3xl">Cards</h1>
                        <p class="mt-4 font-sans text-sm font-semibold text-gray-600">Explore our Ready-to-use,
                            customizable cards .</p>
                    </div>
                    <div class="mt-10 w-full lg:mt-0 lg:w-[70%]">
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-4 lg:gap-y-4">
                        <?php foreach ($cards as $cards): ?>
                            <div class="rounded-md p-2 hover:bg-gray-100/50">
                                <?php $dataToSend = array('title' => $cards['title'], 'gif' => $cards['gif'], 'chunk' => $cards['chunk']); ?>
                                <a href="<?php echo base_url('Home/components?data='. urlencode(json_encode($dataToSend)))?>">
                                    <div class="rounded-t-md border border-gray-200 bg-white">
                                        <img alt="Avatar" loading="lazy" width="150" height="80" decodin   g="async"
                                            data-nimg="1" class="w-full rounded-md object-cover"
                                            style="color:transparent"
                                            src="http://ixorainfotech.in/Foodonation/uploads/assets/<?php echo $cards['image']?>" />
                                        <hr />
                                        <p class="mt-2 p-2 pt-0 text-sm font-semibold text-gray-600"><?php echo $cards['title'] ?>
                                        </p>    
                                    </div>
                                </a>
                            </div>
                        <?php endforeach; ?>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <?php $this->load->view('Assets/footer.php');?>

    </div>
</body>
</html>
