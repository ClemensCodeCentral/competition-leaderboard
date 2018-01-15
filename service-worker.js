self.addEventListener('push', (event) => {
  const payload = event.data ? event.data.text() : null;
  if (payload) {
    event.waitUntil(
      self.registration.showNotification('Code Central Leaderboard', {
        // TODO: show notification
      })
    );
  }
});