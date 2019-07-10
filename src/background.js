browser.contextMenus.create({
    id: "keanify",
    title: "Keanify"
});
  
browser.contextMenus.onClicked.addListener(function(info) {
    if (info.menuItemId == "keanify") {
        browser.tabs.executeScript({
            file: "src/main.js"
        });
    }
});