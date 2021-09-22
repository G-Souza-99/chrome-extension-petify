const sendCheesifyMsg = () => {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { action: "cheesify" });
  });
}

document.querySelector('#cheesify').addEventListener('click', () => {
  sendCheesifyMsg();
})
