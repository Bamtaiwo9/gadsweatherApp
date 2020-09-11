const cacheName = ' cache-v1';
const resourcesToprecache =[
    '/',
    'index.html',
    'index.css',
    'assets/pexels-takenbytablo-680940.jpg',
    'index.js',
    'app.js'
];

self.addEventListener('install', event =>{
    console.log('service worker install events!');
    event.waitUntil(
        caches.open(cacheName).then(cache =>{
            return cache.addAll(resourcesToprecache);
        })
    )
    
})
self.addEventListener('activate' , event => {
    console.log('activate event!')
})

self.addEventListener('fetch', event => {
    event.respondWith(caches.match(event.request)
    .then (cachedResponse => {
        return cachedResponse || fetch(event.request);
    })
  );
});