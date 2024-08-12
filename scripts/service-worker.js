chrome.runtime.onInstalled.addListener(async ({ reason }) => {
  switch (reason) {
  case 'install':
    chrome.tabs.create({});
    return;
  default:;
  }
});
