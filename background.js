chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ jsonData: '' }, () => {
    console.log("The jsonData is initialized.");
  });
});
