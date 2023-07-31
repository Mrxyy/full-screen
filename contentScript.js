if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('/my-service-worker.js') // 替换为你的 CDN Service Worker 文件路径
        .then(function (registration) {
            console.log('Service Worker registered:', registration);
            // 注册成功后，可以使用 Chrome 的通知 API 向用户显示一个通知
            chrome.notifications.create('', {
                type: 'basic',
                iconUrl: 'icon.png', // 替换为你的图标路径
                title: 'PWA Service Worker',
                message: '成功注册 PWA 的 Service Worker！',
            });
        })
        .catch(function (error) {
            console.error('Service Worker registration failed:', error);
        });
}
