const sendCheesifyMsg = () => {
  // TODO: Write a function to send a message to the active tab to 'cheesify' it
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { action: "cheesify" });
  });
}

// TODO: Add an event listener to trigger the function above when clicking the 'Cheesify' button
document.querySelector('#cheesify').addEventListener('click', () => {
  sendCheesifyMsg();
})
