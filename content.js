let RickRollGif = [
  // "https://bit.ly/3Ck6DTU",
  // "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGbJ97zCutfRRpWl9BviPPjsgDof5M9wBDX7-YGu0xVg&s",
  "https://www.icegif.com/wp-content/uploads/2023/01/icegif-162.gif"
  // "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGbJ97zCutfRRpWl9BviPPjsgDof5M9wBDX7-YGu0xVg&s"
  // "https://bit.ly/3CkRXE6"
];

function replaceImages() {
  const imgs = document.querySelectorAll("img, yt-image img");
  for (let image of imgs) {
    const index = Math.floor(Math.random() * RickRollGif.length);
    image.src = RickRollGif[index];
  }
}

// Run once on page load
replaceImages();

// Then set up an interval to run again every 5 seconds, up to 5 times
let counter = 0;
const intervalId = setInterval(() => {
  replaceImages();
  counter++;
  if (counter === 5) {
    clearInterval(intervalId);
    // Open a new window or tab after the image replacement has run for the fifth time

    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUjcmljayBhc3RsZXkgbmV2ZXIgZ29ubmEgZ2l2ZSB5b3UgdXA%3D', '_blank');
  }
}, 5000);



// Then set up a MutationObserver to run again whenever new nodes are added to the body
// const observer = new MutationObserver(replaceImages);
// observer.observe(document.body, { childList: true, subtree: true });