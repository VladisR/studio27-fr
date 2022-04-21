setTimeout(function () {
  var introVideo = document.querySelector('.js-intro-video');

  if (introVideo) {
    introVideo.src = introVideo.querySelector('source').dataset.src;
    introVideo.addEventListener('loadeddata', function () {
      document.querySelector('.js-preloader').classList.add('is-hidden');
      introVideo.classList.add('is-visible');
      introVideo.play();
    }, false);
  }
}, 200);
