const cheesify = () => {
  document.querySelectorAll('img').forEach( (img) => {
    img.src = `https://source.unsplash.com/${img.width}x${img.height}/?cheese&${Math.random()}`;
    img.srcset = img.src;
  })

  document.querySelectorAll("img").forEach((img) => {
    img.src = `https://source.unsplash.com/${img.width}x${
      img.height
    }/?cheese&${Math.random()}`;
    img.srcset = img.src;
  });
}

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "cheesify") cheesify();
});
