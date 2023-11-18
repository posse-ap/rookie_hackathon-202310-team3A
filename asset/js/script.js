//mainvisual splide byひろふみ

const header = document.getElementById("js-header");
const mainVisual = document.getElementById("js-mainvisual");

window.addEventListener("scroll" , function(){
    if(window.scrollY > mainVisual.clientHeight -header.clientHeight){
        header.classList.remove("is-transparent");
    } else {
        header.classList.add("is-transparent");
    }
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


