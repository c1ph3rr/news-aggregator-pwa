self.addEventListener('install', function(event) {
    console.log('installed service worker', event);
});

self.addEventListener('activate', function(event) {
    console.log('activated service worker', event);
    return self.clients.claim();
});

self.addEventListener('fetch', function(event) {
    console.log('fetch service worker', event);
    event.respondWith(fetch(event.request));
});