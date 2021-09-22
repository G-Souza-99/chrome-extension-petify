const petify = () => {
  document.querySelectorAll('img').forEach((img) => {
    img.src = `https://source.unsplash.com/${img.width}x${img.height}/?pets&${Math.random()}`;
    img.srcset = img.src;
  })
}

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "petify") petify();
});
