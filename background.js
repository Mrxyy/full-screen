console.log('Background script loaded.');

chrome.runtime.onInstalled.addListener(() => {
    console.log('Extension installed or updated.');
});

// self.addEventListener('fetch', event => {
//     if (event.request.url.endsWith('/my-service-worker.js')) {
//         event.respondWith(
//             new Response('console.log("Hello, world!");', {
//                 headers: { 'Content-Type': 'application/javascript' },
//             })
//         );
//     }
// });
