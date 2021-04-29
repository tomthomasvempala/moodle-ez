'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "9639429f9970da9825e5993060028450",
".git/config": "95b956ed406cb8b7b1253585e2ccd8aa",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "d41d8cd98f00b204e9800998ecf8427e",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/index": "f85aff6229f5229148c2535e03d59b69",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "464dada00736981aca38db218f6c21b0",
".git/logs/refs/heads/main": "4f40ebedb22036e4917e50231159dc3e",
".git/logs/refs/remotes/origin/main": "312a7cee3a5393cbda0d2f00ba7e0aec",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/0e/3123ca1e9d0c972a25068d4772dfc7fcd1650b": "e1cb05adde77b34ade25b35eb5821a28",
".git/objects/0f/3d9cc7f8be835a659d0267821e00a5225d938c": "ea20c6c200a3c2ad9003511bc74660c4",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/12/12ebe5358212658f77508b86f25c3c67a969eb": "d33ba3beddfbeaa40cd35685b9e7d324",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/16/b2458e27ba4aa83ac9d2f1b20eaf76be016187": "54fe71183ebc741db6349f740ca0dc64",
".git/objects/1c/5c3f9ab9c634950dabf644ecd03458af1cd779": "9681b503d05e4557a37713057f3cd471",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/33/35d990e4fa7beba21328db7afd778c71091442": "3327d683c14485e9a3db03027e201cd6",
".git/objects/33/fe2f9381a2ee63f927002621bfe45bd2d31708": "84c6a1746de819c220087abca78301ef",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/62/d46f226811916f6b39087837125c8f9ac557da": "0797c84911b569e8b52f766cb19c3c08",
".git/objects/7b/da402e536079a7dbcae2f11e33f4f4fe0d00ff": "c4f2d1c7b31fb6f7870e4df574f80b7b",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/81/3671c85388718be48fb654acf4a78b44b8e386": "6600eaf6933faa878548a014519920d9",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/95/18e579d084f35c5300b24043ca46a10ca42b81": "051acf985162f6df3819b25f50603214",
".git/objects/a7/de63b38fd13a868cab5df63b2e3339eb8e2e61": "df307e5bc9dbe16ab4ff0ae459e710c3",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/b6/432710b10b715fe0df32e02e5a42e483b182b8": "3b1fa551ddac6222c4e2e8162de2bed1",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/6118d017697ca88631500500d5a7adf2bd696c": "6eda28c57a8904457a14518073e6c233",
".git/objects/bb/2ffd5cdd4e62f750c7efef0d346cc42d244159": "adc740fec42ecdc8bb55552844a6512d",
".git/objects/bd/2d88dc1bc16fa5cf1ba5f3d4403f5b99f72b4e": "5355a09a9c322b54090a66a357d2fd48",
".git/objects/bf/b841140188ca0d6beadec2f02e834761569e8b": "ab3d32e4127ca08012d665c5d4d00ed5",
".git/objects/c4/7e5ddd6321602abe0cf8c0c5fd8f556521aa58": "8284ba7cef3154c94ae9a91a28509575",
".git/objects/c6/d6703db870c22d933d0c41ee4755dfc521afe1": "53a621e89c411f7ae060874fcf9d837b",
".git/objects/c7/f2af0cdf7e51594fa8daf8f587185d194215aa": "eabd1402a0011c0ee3f94de233be390a",
".git/objects/c8/aaf201eed9bcdfc4c8974e5c61062ed470ba10": "5923612954be8c42423dcb4ce1b998f2",
".git/objects/ca/4a0086949ca3108745f3bc3ccb155fa9bccece": "63240a0f9919986a621319178b9f7b23",
".git/objects/d5/0627361b24562bcb9f3b55baaa1cca99327366": "e4a6d1cf4d9ebc1b95dcfe79950507d3",
".git/objects/d9/f0ffdee3fb98bd03a19b71692d715ea13808ef": "932a7923206d64bcc644bfb585f99881",
".git/objects/e4/7c5b8889d1cc03012a4463ef46f5dfbf182cce": "9af0c1cb087e41b9320aed923bbe106a",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/refs/heads/main": "0c5609b5579eb9da44d1f6f3f6d09b39",
".git/refs/remotes/origin/main": "0c5609b5579eb9da44d1f6f3f6d09b39",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "77923d5b7bfd087d6ccbdb1dd364bfd5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "d7497b85a33b21e6c5e49dce519edd54",
"/": "d7497b85a33b21e6c5e49dce519edd54",
"main.dart.js": "bad6c9d76ac7dc890e749b96fe87669b",
"manifest.json": "040870fd8908ba98e2fd2212961001bd",
"version.json": "4e70e4a47692bca0f9777ecf0873fd96"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
