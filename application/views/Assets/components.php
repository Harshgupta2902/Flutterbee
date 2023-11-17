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
  <script src="https://cdn.tailwindcss.com"></script>
</head>

<body class="min-h-screen bg-white font-sans antialiased __variable_0ec1f4 __variable_deb966">
    <div class="flex min-h-screen flex-col">
        <!-- ------------------------------------------------------------HEADER------------------------------------------------------------ -->
        <?php $this->load->view('Assets/topbar.php');?> 


        <!-- ------------------------------------------------------------MAIN------------------------------------------------------------ -->

        <main class="flex-1">
                <div class="mx-auto max-w-7xl px-3 py-8 md:py-12 lg:px-0 lg:py-14">
              <div class="flex flex-col justify-between md:flex-row md:items-center">
                    <h3 class="pb-4 font-heading text-2xl font-bold"><?php echo $userData['title']; ?></h3>
                      <div class="flex items-center space-x-4">
                          <div class="">
                              <span class="isolate inline-flex rounded-md shadow-sm">
                                  <button type="button" onclick="showPreview()" class="relative inline-flex items-center rounded-l-md bg-white px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10">
                                      <span class="sr-only">Previous</span>
                                      <span class="flex items-center space-x-2 text-sm font-semibold text-black">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4">
                                              <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                                              <circle cx="12" cy="12" r="3"></circle>
                                          </svg>
                                          <span>Preview</span>
                                      </span>
                                  </button>
                                  <button type="button" onclick="showCode()" class="relative -ml-px inline-flex items-center rounded-r-md bg-white px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10">
                                      <span class="sr-only">Next</span>
                                      <span class="flex items-center space-x-2 text-sm font-semibold text-black">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4">
                                              <polyline points="16 18 22 12 16 6"></polyline>
                                              <polyline points="8 6 2 12 8 18"></polyline>
                                          </svg>
                                          <span>Code</span>
                                      </span>
                                  </button>
                              </span>
                          </div>
                          <div class="rounded-md p-2 hover:bg-gray-200">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4">
                                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                              </svg>
                          </div>
                      </div>
                  </div>
                  <!-- <hr style="margin-bottom: 100px;"/> -->
                  <?php if (isset($userData)): ?>
                        <div id="previewContent">
                        <div class="mx-auto max-w-7xl">
                                    <div class="mt-4 min-h-min w-full rounded-md border md:px-4 flex items-center justify-center space-x-2 py-10">
                                        <div class="flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0">
                                        <img class="max-w-xs transition duration-300 ease-in-out hover:scale-110" src="/uploads/<?php echo $userData['gif'] ?>" alt="cupertino">
  
                                        </div>
                                    </div>
                                </div>
                            <!-- Display image or content you want for preview -->
                        </div>
                        <div id="codeContent" style="display: none;">
                            <!-- Display code content initially hidden -->
                            <script src="https://tinyurl.com/myGistss/<?php echo $userData['chunk']; ?>.js"></script>
                        </div>
                    <?php endif; ?>
                  </div>
            </main>

           <!-- ------------------------------------------------------------FOOTER------------------------------------------------------------ -->

        <?php $this->load->view('Assets/footer.php');?>

    </div>  

    
  <script>
    function showPreview() {
      document.getElementById('previewContent').style.display = 'block';
      document.getElementById('codeContent').style.display = 'none';
    }

    function showCode() {
      document.getElementById('previewContent').style.display = 'none';
      document.getElementById('codeContent').style.display = 'block';
    }
  </script>
</body>
</html>
