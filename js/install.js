if ('serviceWorker' in navigator) {
  navigator
    .serviceWorker
    .register('service-worker.js', { scope: './' })
    .then(reg => console.log('Registration succeeded. Scope: ' + reg.scope))
    .catch(error => console.error('Registration error: ' + error.message))
}
