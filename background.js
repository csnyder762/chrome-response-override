var tabList = [];
chrome.tabs.onActivated.addListener((activeInfo) => {
  tabList.push(activeInfo.tabId);
  setTimeout(() => {
    chrome.runtime.onMessage.addListener((request, sender, sendResponse) =>{ 
      let currentTab = tabList[tabList.length - 1];
      sendResponse({ message: currentTab});
      console.log("tabList Length - " + tabList.length + " CURRENT TAB - " + JSON.stringify(currentTab));
      return true;
    });
  }, 100);
});

