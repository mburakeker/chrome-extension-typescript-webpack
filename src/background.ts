import { ChromeRuntimeMessage, ChromeRuntimeMessageType } from "./types";

// Event Listeners

// With this listener, the background script will send a message to the content script
// when the extension icon is clicked
chrome.action.onClicked.addListener((tab: chrome.tabs.Tab) => {
  if (!tab.id) {
    return;
  }
  chrome.tabs.sendMessage(tab.id, {
    type: ChromeRuntimeMessageType.FirstMessageType,
  } as ChromeRuntimeMessage);
  console.log("Log sent from background script");
});
