//mainvisual splide byひろふみ

const header = document.getElementById("js-header");
const mainVisual = document.getElementById("js-mainvisual");

function PageTopCheck() {
  var winScrollTop = $(window).scrollTop();
  var secondTop = $("#activity").offset().top - 150; // 修正したセレクタ

  if (winScrollTop >= secondTop) {
      $('.js-scroll').removeClass('scroll-view');
      $('.js-pagetop').addClass('scroll-view');
  } else {
      $('.js-scroll').addClass('scroll-view');
      $('.js-pagetop').removeClass('scroll-view');
  }
}

// クリックした際の動き
$('.scroll-top a').click(function () {
  var elmHash = $(this).attr('href');

  if (elmHash == "#activity") {
      var pos = $(elmHash).offset().top;
      $('body,html').animate({ scrollTop: pos }, pos);
  } else {
      $('body,html').animate({ scrollTop: 0 }, 500);
  }

  return false;
});

// 画面をスクロールしたら動かしたい場合の記述
$(window).scroll(function () {
  PageTopCheck();
});

// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
  PageTopCheck();
});



new Splide('#js-mainvisual' , {
    cover: true,
    type: 'loop',
    perPage: 1,
    perMove: 1,
    autoplay: true,
    interval: 2000,
}).mount();

document.addEventListener('DOMContentLoaded', function () {
    let els = document.querySelectorAll('.js-fadeIn');
  
    els.forEach(function (fadeIn) {
      let windowHeight = window.innerHeight;
  
      window.addEventListener('scroll', function () {
        let offset = fadeIn.getBoundingClientRect().top;
        let scroll = window.scrollY;
  
        if (scroll > offset - windowHeight + 250) {
          fadeIn.classList.add('is-scrollIn');
        }
      });
    });
  });
  

$(document).ready(function () {
    // 
    $('.slider').slick({
        autoplay: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true,
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // タブの初期化
    const tabHeader = document.querySelectorAll('.tab-header-item');
    const tabBody = document.querySelectorAll('.tab-body-item');

    for (let i = 0; i < tabHeader.length; i++) {
        tabHeader[i].addEventListener('click', tabSwitch);
    }

    function tabSwitch() {
        const index = Array.from(tabHeader).indexOf(this);

        document.querySelector('.tab-header-item.active').classList.remove('active');
        this.classList.add('active');
        document.querySelector('.tab-body-item.show').classList.remove('show');
        tabBody[index].classList.add('show');
    }
});


$(document).ready(function() {
    $('.qa-title').on('click', function() {
      var findElm = $(this).next(".answer");
      $(findElm).slideToggle();
  
      if ($(this).hasClass('close')) {
        $(this).removeClass('close');
      } else {
        $(this).addClass('close');
      }
    });
  
    $('.qa li:first-of-type section').addClass("open");
  
    $(".open").each(function(index, element) {
      var Title = $(element).children('.qa-title');
      $(Title).addClass('close');
      var Box = $(element).children('.answer');
      $(Box).slideDown(500);
    });

  });
  
