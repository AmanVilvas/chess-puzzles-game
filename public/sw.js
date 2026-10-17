self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    await caches.delete('chess-images-v1');
    await self.clients.claim();
  })());
});
