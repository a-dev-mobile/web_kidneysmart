'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "173a2211b62c526e98de71df39890221",
"assets/AssetManifest.json": "89f507f3f399aae276a0fdb1ad820755",
"assets/assets/db/db.db": "14cc20f8e6294180881c9c77461b3d04",
"assets/assets/icons/app_icons.ttf": "7be1b828c6e4af457ddf2762de1c1cd1",
"assets/assets/image/onboarding_remind_you.svg": "2329ea46a68bd2bd47b2c52c710540c6",
"assets/assets/image/splash.png": "7b6d93acbea15a21cb3c8b93de820dac",
"assets/assets/lottie/load_btn.json": "4903663f0dfca40522c8d2185a8e9412",
"assets/assets/lottie/load_page.json": "4e36b5f36734b5e5432b73a1babbb8cf",
"assets/assets/lottie/water_down.json": "087ba1183e610cd243167b71a75593c3",
"assets/assets/lottie/water_up.json": "e09b5cf5a7c12b3f9cbe79e6a2cb6c46",
"assets/assets/svg/activity.svg": "7a5b60ec4e02cf64dfab69e3aa728074",
"assets/assets/svg/blood_pressure.svg": "08225d0767c36394bcb45bec8eca8df9",
"assets/assets/svg/ckd.svg": "82c7b8105d591340b350660aeb2f1a45",
"assets/assets/svg/ckd_female.svg": "5e06d01368ad69d2cf530c0a8ad5ce82",
"assets/assets/svg/ckd_male.svg": "e380d3452a9b9de71569866bfd8badd5",
"assets/assets/svg/date.svg": "7ca48d40747e2bb1d50f9a38317f4089",
"assets/assets/svg/diabet.svg": "6482a13e9bf8fd7bd10960dd03feeecd",
"assets/assets/svg/dialysis.svg": "58a2d5a8b7249b434b37993af7de5b0a",
"assets/assets/svg/dialysis_type.svg": "2e70ba6be709e267796815a71e7ec467",
"assets/assets/svg/dry_weight_input.svg": "9bbed485230244013726039860f6e02a",
"assets/assets/svg/dry_weight_query.svg": "a070b835375152e01063756d3124496a",
"assets/assets/svg/gender.svg": "b57a4d949173784dda5e627a94a77345",
"assets/assets/svg/height_female.svg": "61ef84506530957f9da55142bc400ced",
"assets/assets/svg/height_male.svg": "20e23e7bdfb3fe853e1076853d1ee8dc",
"assets/assets/svg/ic_error.svg": "d74448a130aa9259ad4c17547b47879f",
"assets/assets/svg/ic_error_close.svg": "379e05920337c2f8eefb8f1d86cc740c",
"assets/assets/svg/ic_info.svg": "dd0f2b165b92f37153467c6f07ff22b3",
"assets/assets/svg/ic_info_close.svg": "0d3119c0b7ce5fdbe863a3864f411740",
"assets/assets/svg/ic_success.svg": "657e63a6e8f94bee59853da59e08e31e",
"assets/assets/svg/ic_success_close.svg": "b8667d768e418df7b56038f138b6391e",
"assets/assets/svg/ic_warning.svg": "133bf6fc6b174bfd8846ec97783a578d",
"assets/assets/svg/ic_warning_close.svg": "9fb9c3ebbf523cb4365e0db1b6d54ea8",
"assets/assets/svg/logo.svg": "ad689d820f9d27a5f344ee062cfb862a",
"assets/assets/svg/name_step.svg": "20c0676a71189d7e792eb46226a982af",
"assets/assets/svg/onb_1.svg": "4f5e109c6540f4bf4f8c888433dcaff7",
"assets/assets/svg/onb_2.svg": "25286ac072fafc4a1fa22ed0d52c0dd3",
"assets/assets/svg/onb_3.svg": "f450b8b146e0d01345d212c1ff10ac73",
"assets/assets/svg/onb_4.svg": "9fc3e57f2e970f5f9100aa07adc36565",
"assets/assets/svg/remind_you.svg": "4daab78685c99154a1464b5692981117",
"assets/assets/svg/sort_asc.svg": "d58168a491f8bd0579d220b2197cefc6",
"assets/assets/svg/sort_desc.svg": "3a92e16b089e9e41983cb25df3fde600",
"assets/assets/svg/stage_determine.svg": "49ad7accbe5d651f5bf281fbc37f18ad",
"assets/assets/svg/urine.svg": "f4c177fad0e04225fe606d6021a39b58",
"assets/assets/svg/urine_input.svg": "1aa576c9510a8b3daff0adce985d41d4",
"assets/assets/svg/urine_no.svg": "7e0c2e1eb854a6967880d78689275775",
"assets/assets/svg/weight_dry.svg": "9bbed485230244013726039860f6e02a",
"assets/assets/svg/weight_male.svg": "3552065e774b8825317751d463bacfce",
"assets/assets/svg/weigh_female.svg": "faa915c91ed93051e545bb9ac23e07a5",
"assets/FontManifest.json": "fcc51b36fb50fcdc26c16f4d15f84b82",
"assets/fonts/MaterialIcons-Regular.otf": "1025717ddba00928d69f3f8b376f5f82",
"assets/NOTICES": "d36ed385de8c5cb6d8803e3762d46e67",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "05c0983eb7b09707343f448c77343a1c",
"/": "05c0983eb7b09707343f448c77343a1c",
"main.dart.js": "68691cfdd038c4959504bcf9b3309a15",
"manifest.json": "c34bf9a4b659276ee75972356cc0795c",
"version.json": "07261d737f9ac6aad741e6e9d76e9e04"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
