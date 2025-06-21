$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        dots: false,
        responsive : {
            0: {
                items: 1,
                margin: 32,
            },
            601: {
                items: 1,
            },
            1201: {
                items: 2,
                margin: 48,
            },
        }
    });
  });

  const videoBtn = document.querySelector('#video-btn');
  const videoWrapper = document.querySelector('.video');
  const video = document.querySelector('#video-file');

  videoWrapper.addEventListener('click', function(){
    if (video.paused) {
        videoWrapper.classList.remove('video-overlay')
        videoBtn.classList.add('none')
        video.play()
    }
    else {
        videoWrapper.classList.add('video-overlay')
        videoBtn.classList.remove('none')
        video.pause()
    }
  })