document.getElementById('registerButton').addEventListener('click', async () => {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    // chrome.scripting.registerContentScripts([
    //     {
    //         id: 'myContentScript',
    //         matches: ['<all_urls>'],
    //         js: ['contentScript.js'],
    //     },
    // ]);
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: toggleFullScreen,
    });
});

function toggleFullScreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
}
