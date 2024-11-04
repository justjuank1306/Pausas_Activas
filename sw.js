const CACHE_NAME = 'pausas-activas-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/icon-192x192.png',
    '/icon-512x512.png',
    'https://cdnjs.cloudflare.com/ajax/libs/signature_pad/4.1.5/signature_pad.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => response || fetch(event.request))
    );
});