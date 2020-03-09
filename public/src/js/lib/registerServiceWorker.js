/**
 * 引入 Service Worker
 */

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/assets/js/service-worker.js').then(() => {
      console.info('SW registered')
    }).catch(registrationError => {
      console.warn('SW registration failed: ', registrationError)
    })
  })
}
