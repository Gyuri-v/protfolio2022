(() => {
  /* ■■■■■■■■■■■■■■■■ GREETING ■■■■■■■■■■■■■■■■ */
  const canvas = document.querySelector('#canvas-greeting');
  const context = canvas.getContext('2d');
  const videoImages = [];
  const greetingHeight = document.querySelector('.greeting').offsetHeight;
  let totalImagesCount = 158;
  let progress;
  let currentFrame;

  function setImages() {
    for(let i = 0; i < totalImagesCount; i++ ){
      let imgElem = new Image();
      imgElem.src = `./video/greeting/greeting-img-${1000 + i}.jpg`;
      videoImages.push(imgElem);
    }
  };

  function calcValue(){
    let opaVal;
    
    const partScrollStart = greetingHeight * 0.95;
    const partScrollEnd = greetingHeight * 1;
    const partScrollHeight = partScrollEnd - partScrollStart;
    
    if( pageYOffset >= partScrollStart && pageYOffset <= partScrollEnd ){
      opaVal = (((pageYOffset - partScrollStart) / partScrollHeight ) * -1) + 1;
    }else if( pageYOffset < partScrollStart ){
      opaVal = 1;
    }else if( pageYOffset > partScrollEnd ){
      opaVal = 0;
    }

    return opaVal;
  };

  function aniGreeting(){
    // greeting imogi
    progress = pageYOffset / greetingHeight;
    if (progress < 0) progress = 0;
    if (progress > 1) progress = 1;

    currentFrame = Math.round((totalImagesCount - 1) * progress);
    context.drawImage(videoImages[currentFrame], 0, 0);

    // greeting opacity
    document.querySelector('.greeting-cont').style.opacity = calcValue();

    // 영역 벗어나면 visibility
    if ( pageYOffset > greetingHeight + 50 ) {
      document.querySelector('.greeting-cont').style.visibility = 'hidden';
    }else{
      document.querySelector('.greeting-cont').style.visibility = 'visible';
    }

    // 
    const heightRatio = window.innerHeight / 1080 * 0.9;
    canvas.style.transform = `translate3d(-50%, -50%, 0) scale(${heightRatio})`;
  };
  
  function init() {
    context.drawImage(videoImages[0], 0, 0);

    window.addEventListener('scroll', function () {
      aniGreeting();
    });
  }

  window.addEventListener('load', () => {
    init();
    aniGreeting();
  });
  setImages();
})();

$(document).ready(function () {
  /* ■■■■■■■■■■■■■■■■ mouse ani ■■■■■■■■■■■■■■■■ */
  // mouse animation
  var docStyle = document.documentElement.style;

  document.addEventListener('mousemove', function (e) {
    docStyle.setProperty('--mouse-x', e.clientX);
    docStyle.setProperty('--mouse-y', e.clientY);
  });

  /* ■■■■■■■■■■■■■■■■ cursor ■■■■■■■■■■■■■■■■ */
  // cursor
  window.onload = function () {
    var position = { x: 0, y: 0 };
    var delta = { x: 0, y: 0 };
    var easeFactor = 0.15;
    var cursor = document.querySelector('.cursor');
    var cursorTxt = document.querySelector('.cursor .txt');
    window.addEventListener('mousemove', onMouseMove.bind(this));

    function onMouseEnter() {
      cursor.classList.add('expanded');
    }
    function onMouseLeave() {
      cursor.classList.remove('expanded');
    }

    function onMouseEnterPJ() {
      cursor.classList.add('expanded-pj');
      cursorTxt.innerHTML = 'VIEW<br>PROJECT';
    }
    function onMouseLeavePJ() {
      cursor.classList.remove('expanded-pj');
      cursorTxt.innerHTML = 'click';
    }

    document.querySelectorAll('a').forEach(function (item) {
      item.addEventListener('mouseenter', onMouseEnter.bind(this));
      item.addEventListener('mouseleave', onMouseLeave.bind(this));
    });
    document.querySelectorAll('button').forEach(function (item) {
      item.addEventListener('mouseenter', onMouseEnter.bind(this));
      item.addEventListener('mouseleave', onMouseLeave.bind(this));
    });
    document.querySelectorAll('.project-item').forEach(function (item) {
      item.addEventListener('mouseenter', onMouseEnterPJ.bind(this));
      item.addEventListener('mouseleave', onMouseLeavePJ.bind(this));
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

  /* ■■■■■■■■■■■■■■■■ text ani ■■■■■■■■■■■■■■■■ */
  // aniTxt 텍스트 애니
  $(window).scroll(function () {
    $('.aniTxt').each(function () {
      var thisTop = $(this).offset().top - 900;
      if ($(window).scrollTop() > thisTop) {
        $(this).addClass('active');
      } else {
        $(this).removeClass('active');
      }
    });
  });
  $('.aniTxt').each(function () {
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

  // ■■■■■■■■■■■■■■■■ INTRO ■■■■■■■■■■■■■■■■
  var controller = new ScrollMagic.Controller();

  // intro-title
  var tweenIntroT1 = TweenMax.fromTo(
    '.intro-title .t1',
    0.2,
    { scale: 12, x: '-90vw', y: 0 },
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
    .addTo(controller);
  // .addIndicators({
  //   name: '인트로 텍스트',
  // });
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
    .addTo(controller);
  // .addIndicators({
  //   name: '인트로 텍스트 마지막',
  // });

  // ■■ intro ---- intro-img hide, bg show
  $(window).scroll(function () {
    if ($(document).scrollTop() > $('.intro').offset().top) {
      $('.intro-img').addClass('hide');
      $('.intro-bg').addClass('active');
    } else {
      $('.intro-img').removeClass('hide');
      $('.intro-bg').removeClass('active');
    }
  });

  // ■■ intro ---- intro-title 커지면서 사라지는 애니메이션
  var introEnd = $('.about').offset().top - $(window).height() * 1.2;
  if ($(document).scrollTop() > introEnd) {
    $('.intro-cont').addClass('none');
  } else {
    $('.intro-cont').removeClass('none');
  }
  $(window).scroll(function () {
    if ($(document).scrollTop() > introEnd) {
      $('.intro-title').addClass('hide');
      $('.intro-cont').addClass('hide');
    } else {
      $('.intro-title').removeClass('hide');
      $('.intro-cont').removeClass('hide');
      $('.intro-cont').removeClass('none');
    }
  });

  // ■■ intro ---- intro-bg 스크롤 스케일 애니
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
    .addTo(controller);
  // .addIndicators({
  //   name: '인트로 bg',
  // });

  
  // ■■■■■■■■■■■■■■■■ ABOUT ■■■■■■■■■■■■■■■■
  // ■■ about ---- about-title 애니 y이동
  $(window).resize(function() { 
    if( $(window).width() > 1024 ){
      var tweenAboutTitle1 = TweenMax.fromTo(
        '.about-title',
        0.2,
        { y: 0 },
        { y: 400 }
      );
      var sceneAboutTitle1 = new ScrollMagic.Scene({
        triggerElement: '.about',
        triggerHook: 1,
        offset: 0,
        duration: '100%',
      })
        .setTween(tweenAboutTitle1)
        .addTo(controller);
        // .addIndicators({
        //   name: 'about-title 1',
        // });
    }else if( $(window).width() > 768 ){
      var tweenAboutTitle1 = TweenMax.fromTo(
        '.about-title',
        0.2,
        { y: 0 },
        { y: 300 }
      );
      var sceneAboutTitle1 = new ScrollMagic.Scene({
        triggerElement: '.about',
        triggerHook: 1,
        offset: 0,
        duration: '100%',
      })
        .setTween(tweenAboutTitle1)
        .addTo(controller);
    }else{
      var tweenAboutTitle1 = TweenMax.fromTo(
        '.about-title',
        0.2,
        { y: 0 },
        { y: 200 }
      );
      var sceneAboutTitle1 = new ScrollMagic.Scene({
        triggerElement: '.about',
        triggerHook: 1,
        offset: 0,
        duration: '100%',
      })
        .setTween(tweenAboutTitle1)
        .addTo(controller);
    }
  });
  $(window).trigger("resize");

  // ■■ about ---- about-title x이동
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
    .addTo(controller);
  // .addIndicators({
  //   name: 'about-title 2',
  // });

  // ■■ about ---- 카운트 애니
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

  // ■■■■■■■■■■■■■■■■ PROJECT ■■■■■■■■■■■■■■■■
  $('.project-item').each(function(){
      var colorThief = new ColorThief();
      var img = $(this).find('img');
      var color = colorThief.getColor($(img)[0]);
      $(this).find('.hover-box').css('background-color','rgba('+color+', 0.2'+')');
  });

  var projectTop = $('.project').offset().top - windowHalf;
  $(window).scroll(function () {
    $(document).scrollTop() > projectTop
      ? $('.project-cont').addClass('active')
      : $('.project-cont').removeClass('active');
    $(document).scrollTop() > $('.project').offset().top
      ? $('.project-cont').addClass('actTit')
      : $('.project-cont').removeClass('actTit');
    $(document).scrollTop() > $('.project').offset().top + $(window).height()
      ? $('.project-cont').addClass('hide')
      : $('.project-cont').removeClass('hide');
  });
  // ■■ project ---- project-cont
  var tweenProjectCont = TweenMax.fromTo(
    '.project-cont',
    0.2,
    { scale: 10, opacity: 0 },
    { scale: 1, opacity: 1 }
  );
  var sceneProjectCont = new ScrollMagic.Scene({
    triggerElement: '.project',
    triggerHook: 0.5,
    offset: 0,
    duration: '20%',
  })
    .setTween(tweenProjectCont)
    .addTo(controller);
  // .addIndicators({
  //   name: '프로젝트 컨텐츠',
  // });

  // ■■ project ---- project-cont title
  var tweenProjectTit1 = TweenMax.fromTo(
    '.project-cont .title:nth-child(2n)',
    0.2,
    { x: 0 },
    { x: '-170vw' }
  );
  var tweenProjectTit2 = TweenMax.fromTo(
    '.project-cont .title:nth-child(odd)',
    0.2,
    { x: 0 },
    { x: '170vw' }
  );
  var sceneProjectTit1 = new ScrollMagic.Scene({
    triggerElement: '.project',
    triggerHook: 0.5,
    offset: windowHalf,
    duration: '100%',
  })
    .setTween(tweenProjectTit1)
    .addTo(controller);
  // .addIndicators({
  //   name: '프로젝트 타이틀',
  // });
  var sceneProjectTit2 = new ScrollMagic.Scene({
    triggerElement: '.project',
    triggerHook: 0.5,
    offset: windowHalf,
    duration: '100%',
  })
    .setTween(tweenProjectTit2)
    .addTo(controller);

  // 프로젝트 리스트
  var pjItem = $('.project-item');
  for (var i = 0; i < pjItem.length; i++) {
    var pjImg = $(pjItem[i]).find('.img');
    var tweenProjectItem = TweenMax.fromTo(
      pjItem[i],
      0.2,
      { y: '10%' },
      { y: '-10%' }
    );
    var tweenProjectImg = TweenMax.fromTo(
      pjImg,
      0.2,
      { y: '5%', scale: 1.05 },
      { y: '-5%', scale: 1 }
    );
    var sceneProjectItem = new ScrollMagic.Scene({
      triggerElement: pjItem[i],
      triggerHook: 1,
      offset: 0,
      duration: '100%',
    })
      .setTween(tweenProjectItem)
      .addTo(controller);
    // .addIndicators({
    //   name: '프로젝트 아이템' + i,
    // });
    var sceneProjectList = new ScrollMagic.Scene({
      triggerElement: pjItem[i],
      triggerHook: 0.5,
      offset: 0,
      duration: '100%',
    })
      .setTween(tweenProjectImg)
      .addTo(controller);
    // .addIndicators({
    //   name: '프로젝트 이미지' + i,
    // });
  }

  // ■■■■■■■■■■■■■■■■ STUDY ■■■■■■■■■■■■■■■■
  // ■■ study ---- study 가면 study-cont-tit 나오기 --- class
  var sceneStudyCont1 = new ScrollMagic.Scene({
    triggerElement: '.study',
    triggerHook: 1,
    offset: 0,
    duration: '0%',
  })
    .setClassToggle('.study-cont', 'active1')
    .addTo(controller);
  // .addIndicators({
  //   name: 'study-cont-tit 나오기',
  // });

  // ■■ study ---- study-cont-tit 변화 --- class
  var sceneStudyCont2 = new ScrollMagic.Scene({
    triggerElement: '.study',
    triggerHook: 0,
    offset: -100,
    duration: '0%',
  })
    .setClassToggle('.study-cont-tit', 'active2')
    .addTo(controller);
  // .addIndicators({
  //   name: 'study-cont-tit bg 변화',
  // });

  // ■■ study ---- study-cont-tit 줄어들기
  var tweenStudyBgOffset = $(window).height() * 0.8;
  var tweenStudyBg = TweenMax.to('.study-cont-tit', 0.2, { height: 0 });
  var sceneStudyBg = new ScrollMagic.Scene({
    triggerElement: '.study',
    triggerHook: 0.5,
    offset: tweenStudyBgOffset,
    duration: '40%',
  })
    .setTween(tweenStudyBg)
    .addTo(controller);
  // .addIndicators({
  //   name: 'study-cont-tit bg 줄어들기',
  // });

  // ■■ study ---- study-cont-tit 사라지기
  var tweenStudyHideOffset = $(window).height() * 1.2;
  $(window).scroll(function () {
    if ( $(document).scrollTop() > $('.study').offset().top + tweenStudyHideOffset ) {
      $('.study-cont-tit').addClass('hide');
    } else {
      $('.study-cont-tit').removeClass('hide');
    }
  });

  // ■■ study ---- study-track 좌우 이동
  var tweenStudyTrackOffset = $(window).height() * 1.5;
  var studyTrackWidth = (($('.study-cont-track').width() - $(window).width() + parseInt($('.study-cont-item').css('margin-right') )) * -1);
  var tweenStudyTrack = TweenMax.fromTo(
    '.study-cont-track',
    0.2,
    { x: 0 },
    { x: studyTrackWidth }
  );
  var sceneStudyTrack = new ScrollMagic.Scene({
    triggerElement: '.study',
    triggerHook: 0.5,
    offset: tweenStudyTrackOffset,
    duration: '100%',
  })
    .setTween(tweenStudyTrack)
    .addTo(controller);
  // .addIndicators({
  //   name: 'study-cont-track',
  // });

  // ■■ study ---- study-list 사라짐
  var studyListDuration = '';
  var tweenStudyList = TweenMax.fromTo(
    '.study-cont-list',
    0.2,
    { y: 0 },
    { y: '-100vh' }
  );
  var sceneStudyList = new ScrollMagic.Scene({
    triggerElement: '.contact',
    triggerHook: 0.5,
    offset: 0,
    duration: '100%',
  })
    .setClassToggle('.study-cont-list', 'active2')
    .setTween(tweenStudyList)
    .addTo(controller);
  // .addIndicators({
  //   name: 'study-list 사라짐',
  // });

  // ■■■■■■■■■■■■■■■■ CONTACT ■■■■■■■■■■■■■■■■
  // ■■ contact ---- 스크롤시 end컨
  $(window).scroll(function () {
    // ■■ contact ---- active
    if ($(document).scrollTop() > $('.contact').offset().top - 600) {
      $('.contact-cont').addClass('active');
    } else {
      $('.contact-cont').removeClass('active');
    }

    // ■■ contact ----
    var tweenContactSize = TweenMax.fromTo(
      '.contact-tit .item1 svg',
      0.2,
      { 'margin-top': 500, scale: 2, rotate: 20 },
      { 'margin-top': 0, scale: 1, rotate: 20 }
    );
    var tweenContactPath = TweenMax.fromTo(
      '.contact-tit .item1 svg text',
      0.2,
      { stroke: '#f69000', fill: 'transparent' },
      { stroke: 'transparent', fill: '#f69000' }
    );
    var sceneContactSize = new ScrollMagic.Scene({
      triggerElement: '.contact',
      triggerHook: 0.5,
      offset: 300,
      duration: '50%',
    })
      .setTween(tweenContactSize)
      .addTo(controller);
    var sceneContactPath = new ScrollMagic.Scene({
      triggerElement: '.contact',
      triggerHook: 0.5,
      offset: 400,
      duration: '50%',
    })
      .setTween(tweenContactPath)
      .addTo(controller);
    // .addIndicators({
    //   name: 'contact 텍스트 사이즈',
    // });

    // ■■ contact ---- 텍스트 회전
    var tweenContactRotate1 = TweenMax.fromTo(
      '.contact .item1',
      0.2,
      { rotation: 0 },
      { rotation: -180 }
    );
    var tweenContactRotate2 = TweenMax.fromTo(
      '.contact .item2',
      0.2,
      { rotation: 180 },
      { rotation: 0 }
    );
    var sceneContactRotate1 = new ScrollMagic.Scene({
      triggerElement: '.contact',
      triggerHook: 0,
      offset: 500,
      duration: '100%',
    })
      .setTween(tweenContactRotate1)
      .addTo(controller);
    var sceneContactRotate2 = new ScrollMagic.Scene({
      triggerElement: '.contact',
      triggerHook: 0,
      offset: 500,
      duration: '100%',
    })
      .setClassToggle('.contact .item1', 'active')
      .setTween(tweenContactRotate2)
      .addTo(controller);
    // .addIndicators({
    //   name: 'contact 텍스트 회전',
    // });

    // ■■ contact ---- item2 휘어짐
    if (
      $(document).scrollTop() >
      $('.contact').offset().top + $(window).height() * 1.5
    ) {
      $('.contact-tit .item2').addClass('active');
    } else {
      $('.contact-tit .item2').removeClass('active');
    }

    // ■■ contact ---- item2 text
    if (
      $(document).scrollTop() >
      $('.footer').offset().top - $(window).height()
    ) {
      $('.contact-tit .item2 .text').addClass('active');
    } else {
      $('.contact-tit .item2 .text').removeClass('active');
    }
  });
});
