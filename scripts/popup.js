function sendCheesifyMsg() {
  // TODO: Write a function to send a message to the active tab to 'cheesify' it
  alert("Cheesify")
}

// TODO: Add an event listener to trigger the function above when clicking the 'Cheesify' button
document.querySelector('#cheesify').addEventListener('click', () => {
  sendCheesifyMsg();
})
