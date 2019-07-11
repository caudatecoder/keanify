const menuItem = {
    id: "keanify",
    title: "Keanify",
    type: 'normal'
}

function contextMenuHandler(userAgent) {
    return function(info) {
        if (info.menuItemId == "keanify") {
            userAgent.tabs.executeScript({
                file: "src/main.js"
            });
        }
    }
}

function browserActionHandler(userAgent) {
    return function() {
        userAgent.tabs.executeScript({
            file: "src/main.js"
        });
    }
}

try {
    browser.contextMenus.create(menuItem); // Throws reference error in chrome
    browser.contextMenus.onClicked.addListener(contextMenuHandler(browser));
    browser.browserAction.onClicked.addListener(browserActionHandler(browser))
} catch (error) {
    chrome.runtime.onInstalled.addListener(function() {
        chrome.contextMenus.create(menuItem);
    })
    chrome.contextMenus.onClicked.addListener(contextMenuHandler(chrome))
    chrome.browserAction.onClicked.addListener(browserActionHandler(chrome))
}
