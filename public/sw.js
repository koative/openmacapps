// Bump the version when the precache list or caching strategy changes.
const CACHE = 'site-v1';
const scope = new URL(self.registration.scope);
const offlinePage = new URL('offline/', scope).href;
const assets = new URL('_astro/', scope).pathname;
const precache = [
  offlinePage,
  'favicon.svg',
  'apple-touch-icon.png',
  'icon-192.png',
  'icon-512.png',
  'icon-maskable-512.png',
].map((path) => new URL(path, scope).href);

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(CACHE)
      .then((cache) => cache.addAll(precache))
      .then(() => self.skipWaiting()),
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys.filter((key) => key !== CACHE).map((key) => caches.delete(key)),
        ),
      )
      .then(() => self.clients.claim()),
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);
  // Analytics, Homebrew, GitHub and other origins go straight to the network.
  if (request.method !== 'GET' || url.origin !== scope.origin) return;

  if (request.mode === 'navigate') {
    // ponytail: visited pages are cached without a size cap; add an LRU trim if storage complaints appear.
    event.respondWith(
      fetch(request)
        .then((response) => {
          if (response.ok) {
            const copy = response.clone();
            event.waitUntil(
              caches.open(CACHE).then((cache) => cache.put(request, copy)),
            );
          }
          return response;
        })
        .catch(async () => {
          const cached = await caches.match(request);
          return cached ?? (await caches.match(offlinePage)) ?? Response.error();
        }),
    );
    return;
  }

  // Hashed build assets never change at the same URL.
  if (url.pathname.startsWith(assets)) {
    event.respondWith(
      caches.match(request).then(
        (cached) =>
          cached ??
          fetch(request).then((response) => {
            if (response.ok) {
              const copy = response.clone();
              event.waitUntil(
                caches.open(CACHE).then((cache) => cache.put(request, copy)),
              );
            }
            return response;
          }),
      ),
    );
  }
});
