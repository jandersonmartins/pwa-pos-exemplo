self.addEventListener('install', event => {
  const version = 'v1'
  const cachePromise = caches
    .open(version)
    .then(cache => {
      return cache.addAll([
        'manifest.json',
        'index.html',
        'js/install.js',
        'icons/android-icon-36x36.png',
        'icons/android-icon-48x48.png',
        'icons/android-icon-72x72.png',
        'icons/android-icon-96x96.png',
        'icons/android-icon-144x144.png',
        'icons/android-icon-192x192.png'
      ])
    })

  event.waitUntil(cachePromise)
})

self.addEventListener('fetch', event => {
  const responsePromise = caches
    .match(event.request)
    .then(response => (response || fetch(event.request)))

  event.respondWith(responsePromise)
})
