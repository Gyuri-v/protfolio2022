$(document).ready(function () {
  // cursor
  window.onload = function () {
    var position = { x: 0, y: 0 };
    var delta = { x: 0, y: 0 };
    var easeFactor = 0.15;
    var cursor = document.querySelector('.cursor');
    window.addEventListener('mousemove', onMouseMove.bind(this));

    function onMouseEnter() {
      cursor.classList.add('expanded');
    }

    function onMouseLeave() {
      cursor.classList.remove('expanded');
    }

    document.querySelectorAll('a').forEach(function (item) {
      item.addEventListener('mouseenter', onMouseEnter.bind(this));
      item.addEventListener('mouseleave', onMouseLeave.bind(this));
    });
    document.querySelectorAll('button').forEach(function (item) {
      item.addEventListener('mouseenter', onMouseEnter.bind(this));
      item.addEventListener('mouseleave', onMouseLeave.bind(this));
    });

    function onMouseMove(e) {
      position.x = e.clientX;
      position.y = e.clientY;
    }

    function onRender() {
      delta.x += (position.x - delta.x) * easeFactor;
      delta.y += (position.y - delta.y) * easeFactor;
      cursor.style.left = delta.x - cursor.offsetWidth / 2 + 'px';
      cursor.style.top = delta.y - cursor.offsetHeight / 2 + 'px';
      window.requestAnimationFrame(onRender.bind(this));
    }

    window.requestAnimationFrame(onRender.bind(this));
  };

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

  // intro-img hide, bg show
  $(window).scroll(function () {
    if ($(document).scrollTop() > $('.intro').offset().top) {
      $('.intro-img').addClass('hide');
      $('.intro-bg').addClass('active');
    } else {
      $('.intro-img').removeClass('hide');
      $('.intro-bg').removeClass('active');
    }
  });

  // intro-title 커지면서 사라지는 애니메이션
  var introEnd = $('.about').offset().top - $(window).height() * 1.5;
  $(window).scroll(function () {
    if ($(document).scrollTop() > introEnd) {
      $('.intro-title').addClass('hide');
      $('.intro-cont').addClass('hide');
    } else {
      $('.intro-title').removeClass('hide');
      $('.intro-cont').removeClass('hide');
    }
  });

  // intro-bg 스크롤 스케일 애니
  var tweenIntroBg = TweenMax.fromTo(
    '.intro-bg',
    0.2,
    { scale: 1 },
    { scale: 1.5 }
  );
  var sceneIntroBg = new ScrollMagic.Scene({
    triggerElement: '.intro',
    triggerHook: 0,
    offset: 0,
    duration: '250%',
  })
    .setTween(tweenIntroBg)
    .addTo(controller)
    .addIndicators({
      name: '인트로 bg',
    });

  // about-title 애니 y이동
  var tweenAboutTitle1 = TweenMax.fromTo(
    '.about-title',
    0.2,
    { y: 0 },
    { y: 450 }
  );
  var sceneAboutTitle1 = new ScrollMagic.Scene({
    triggerElement: '.about',
    triggerHook: 1,
    offset: 0,
    duration: '100%',
  })
    .setTween(tweenAboutTitle1)
    .addTo(controller)
    .addIndicators({
      name: 'about-title 1',
    });

  // about-title x이동
  var windowHalf = $(window).height() * 0.7;
  var tweenAboutTitle2 = TweenMax.fromTo(
    '.about-title',
    0.2,
    { x: 0 },
    { x: -1000 }
  );
  var sceneAboutTitle2 = new ScrollMagic.Scene({
    triggerElement: '.about',
    triggerHook: 1,
    offset: windowHalf,
    duration: '300%',
  })
    .setTween(tweenAboutTitle2)
    .addTo(controller)
    .addIndicators({
      name: 'about-title 2',
    });

  // about-count 텍스트 애니
  $(window).scroll(function () {
    $('.about-count').each(function () {
      var thisTop = $(this).offset().top - 900;
      if ($(window).scrollTop() > thisTop) {
        $(this).addClass('active');
      } else {
        $(this).removeClass('active');
      }
    });
  });
  $('.about-count strong').each(function () {
    var typingIdx = 0;
    var typingTxt = $(this).text();
    //typingTxt = typingTxt.replace(/(\s*)/g, "");
    typingTxt = typingTxt.split('');
    $(this).text('');
    for (var i = 0; i < typingTxt.length; i++) {
      $(this).append('<i>' + typingTxt[typingIdx] + '</i>');
      typingIdx++;
    }
  });
  // 카운트 애니
  var countOn = 'n';
  var counterTop = $('.about-count').offset().top - 900;

  $('.count1').css({ opacity: '0' });
  $('.count2').css({ opacity: '0' });
  $('.count3').css({ opacity: '0' });
  $(window).scroll(function () {
    if ($(document).scrollTop() > counterTop) {
      $('.count1').css({ opacity: '1' });
      $('.count2').css({ opacity: '1' });
      $('.count3').css({ opacity: '1' });

      if (countOn == 'n') {
        countOn = 'y';

        $('.count1').counterUp({
          delay: 10,
          time: 1000,
        });
        $('.count2').counterUp({
          delay: 10,
          time: 1500,
        });
        $('.count3').counterUp({
          delay: 10,
          time: 2000,
        });
      }
    } else {
      countOn = 'n';
      $('.count1').css({ opacity: '0' });
      $('.count2').css({ opacity: '0' });
      $('.count3').css({ opacity: '0' });
    }
  });
});
