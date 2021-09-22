const sendPetifyMsg = () => {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { action: "petify" });
  });
}

document.querySelector('#petify').addEventListener('click', () => {
  sendPetifyMsg();
})
