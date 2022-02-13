$(document).ready(function () {
  if ($(document).scrollTop() > 0) {
    $('.intro-img').addClass('hide');
  }
  $(window).scroll(function () {
    if ($(document).scrollTop() > 0) {
      $('.intro-img').addClass('hide');
    } else {
      $('.intro-img').removeClass('hide');
    }
  });

  var controller = new ScrollMagic.Controller();

  var tweenIntroT1 = TweenMax.fromTo(
    '.intro-title .t1',
    0.2,
    { scale: 12, x: '-80vw', y: 0 },
    { scale: 1, x: 0, y: 0 }
  );
  var tweenIntroT2 = TweenMax.fromTo(
    '.intro-title .t2',
    0.2,
    { scale: 10, x: 0, y: '-140vh' },
    { scale: 1, x: 0, y: 0 }
  );
  var tweenIntroT3 = TweenMax.fromTo(
    '.intro-title .t3',
    0.2,
    { scale: 9, x: 100, y: '130vh' },
    { scale: 1, x: 0, y: 0 }
  );
  var tweenIntroT4 = TweenMax.fromTo(
    '.intro-title .t4',
    0.2,
    { scale: 11, x: -100, y: '-150vh' },
    { scale: 1, x: 0, y: 0 }
  );
  var tweenIntroT5 = TweenMax.fromTo(
    '.intro-title .t5',
    0.2,
    { scale: 10, x: '30vw', y: '130vh' },
    { scale: 1, x: 0, y: 0 }
  );
  var sceneIntroT1 = new ScrollMagic.Scene({
    triggerElement: '.intro',
    triggerHook: 0,
    offset: 0,
    duration: '50%',
  })
    .setTween(tweenIntroT1)
    .addTo(controller)
    .addIndicators({
      name: '인트로 텍스트',
    });
  var sceneIntroT2 = new ScrollMagic.Scene({
    triggerElement: '.intro',
    triggerHook: 0,
    offset: '100vh',
    duration: '50%',
  })
    .setTween(tweenIntroT2)
    .addTo(controller);
  var sceneIntroT3 = new ScrollMagic.Scene({
    triggerElement: '.intro',
    triggerHook: 0,
    offset: '200vh',
    duration: '50%',
  })
    .setTween(tweenIntroT3)
    .addTo(controller);
  var sceneIntroT4 = new ScrollMagic.Scene({
    triggerElement: '.intro',
    triggerHook: 0,
    offset: '300vh',
    duration: '50%',
  })
    .setTween(tweenIntroT4)
    .addTo(controller);
  var sceneIntroT5 = new ScrollMagic.Scene({
    triggerElement: '.intro',
    triggerHook: 0,
    offset: '400vh',
    duration: '50%',
  })
    .setTween(tweenIntroT5)
    .addTo(controller)
    .addIndicators({
      name: '인트로 텍스트 마지막',
    });

  $(window).scroll(function () {
    if ($(document).scrollTop() > $('.intro').offset().top) {
      $('.intro-img').addClass('hide');
      $('.intro-bg').addClass('active');
    } else {
      $('.intro-img').removeClass('hide');
      $('.intro-bg').removeClass('active');
    }
  });

  $(window).scroll(function () {
    if (
      $(document).scrollTop() >
      $('.about').offset().top - $(window).height() * 1.5
    ) {
      $('.intro-title').addClass('hide');
    } else {
      $('.intro-title').removeClass('hide');
    }
  });

  var tweenIntroBg = TweenMax.fromTo(
    '.intro-bg',
    0.2,
    { scale: 1 },
    { scale: 1.3 }
  );
  var sceneIntroBg = new ScrollMagic.Scene({
    triggerElement: '.intro',
    triggerHook: 0,
    offset: 0,
    duration: '200%',
  })
    .setTween(tweenIntroBg)
    .addTo(controller)
    .addIndicators({
      name: '인트로 bg',
    });
});
