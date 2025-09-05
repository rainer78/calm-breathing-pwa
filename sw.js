const CACHE = "calm-breathing-v1";
const ASSETS = [
  "./", "./index.html",
  "./manifest.webmanifest",
  "./icons/icon-192.png", "./icons/icon-512.png",
  "https://aframe.io/releases/1.5.0/aframe.min.js"
];
self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", (e) => { e.waitUntil(self.clients.claim()); });
self.addEventListener("fetch", (e) => {
  e.respondWith(caches.match(e.request).then((hit) => hit || fetch(e.request)));
});
