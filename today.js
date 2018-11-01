(function() {
  let id = 'lfgnbiombihfhiknpjfdnbdekdafkbhg';

  let myAudio = new Audio(`chrome-extension://${id}/today.mp3`);
  myAudio.load();

  let myImg = new Image();
  myImg.src = `chrome-extension://${id}/dre.jpg`;
  myImg.style.position = 'absolute';
  myImg.style.display = 'none';

  document.body.appendChild(myImg);

  setInterval(() => {
    let inner = Array.from(document.querySelectorAll('.RveJvd.snByac')).filter(
      item => item.innerHTML === 'Today'
    )[0];
    console.log(inner)
    if (!inner.getAttribute(`data-${id}-set`)) {
      inner.addEventListener('click', () => {
        myAudio.currentTime = 0;
        myAudio.play();
        startAnimation();
        return true;
      });
      inner.setAttribute(`data-${id}-set`, 1);
    }
  }, 100);

  function startAnimation() {
    var width = window.innerWidth;
    var height = window.innerHeight;
    var x = 0;
    var interval = setInterval(function() {
      myImg.style.left = x + 'px';
      var cx = (x - width / 2) / (width / 2);
      var cy = Math.sqrt(1 - cx * cx);
      myImg.style.top = height - 225 - cy * (height / 2) + 'px';
      myImg.style.display = 'block';
      myImg.style.zIndex = 999;
      if (x < 175) {
        myImg.style.opacity = x / 175;
      } else if (x > width - 350) {
        myImg.style.opacity = 1.0 - (x - (width - 350)) / 175;
      } else {
        myImg.style.opacity = 1.0;
      }
      x += 30;
      if (x > width - 175) {
        myImg.style.display = 'none';
        clearInterval(interval);
      }
    }, 50);
  }
})();
