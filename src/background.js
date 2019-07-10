const menuItem = {
    id: "keanify",
    title: "Keanify",
    type: 'normal'
}

function clickHandler(userAgent) {
    return function(info) {
        if (info.menuItemId == "keanify") {
            userAgent.tabs.executeScript({
                file: "src/main.js"
            });
        }
    }
}

try {
    browser.contextMenus.create(menuItem); // Throws reference error in chrome
    browser.contextMenus.onClicked.addListener(clickHandler(browser));
} catch (error) {
    chrome.runtime.onInstalled.addListener(function() {
        chrome.contextMenus.create(menuItem);
    })
    chrome.contextMenus.onClicked.addListener(clickHandler(chrome))
}
