import { ChromeRuntimeMessage, ChromeRuntimeMessageType } from "./types";

// Event Listeners

// With this listener, the content script will start monitoring the DOM changes
// when background script sends a message with type FirstMessageType
chrome.runtime.onMessage.addListener((req: ChromeRuntimeMessage) => {
  if (req.type === ChromeRuntimeMessageType.FirstMessageType) {
    monitorElementChanges();
  }
});

// Functions
const monitorElementChanges = (): void => {
  const targetNode = document.querySelector("body");
  if (!targetNode) return;

  const observer = new MutationObserver((mutationsList) => {
    for (const mutation of mutationsList) {
      if (mutation.type === "childList") {
        console.log("A child node has been added or removed.");
      }
    }
  }
  );
  const config = { attributes: false, childList: true, subtree: true, characterData: true };
  observer.observe(targetNode, config);
};

