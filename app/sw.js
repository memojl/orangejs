//Service Worker sw.js / index.php
self.addEventListener('install', function(event) {
  console.log('[Service Worker] Instalando Service Worker (sw.js)...', event);
  event.waitUntil(
	caches.open('static').then(function(cache) {
	  cache.addAll(['/MisSitios/orangejs/app/', '/MisSitios/orangejs/app/index.html', '/MisSitios/orangejs/app/bloques/WPA/manifest.json','/MisSitios/orangejs/app/bloques/WPA/appCon.js']);
	})
  );
});

self.addEventListener('activate', function(event) {
  console.log('[Service Worker] Activando Service Worker (sw.js)...', event);
});

self.addEventListener('fetch', function(event) {//console.log(event.request.url);
  event.respondWith(
	  caches.match(event.request).then(function(response) {
		if (response) {
		  return response;
		} else {
		  return fetch(event.request).then(function(res) {
			return caches.open('dynamic').then(function(cache) {
			  //cache.put(event.request.url, res.clone()).then(()=>{cache.delete('/MisSitios/orangejs/app/');});
			  cache.put(event.request.url, res.clone()).then(()=>{cache.delete(event.request.url);});
			  return res;
			});
		  });
		}
	  })
  ); 
});  

