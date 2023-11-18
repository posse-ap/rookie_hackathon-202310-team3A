// slide by さくら

$('.slider').slick({
    autoplay: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    dots: true,
  });

// Daily by よっしー

const tabHeader = document.querySelectorAll('.tab-header-item');
const tabBody = document.querySelectorAll('.tab-body-item');

document.addEventListener('DOMContentLoaded', function(){
    for(let i = 0; i < tabHeader.length; i++){
        tabHeader[i].addEventListener('click', tabSwitch);
    }

    function tabSwitch(){
        document.querySelectorAll('.active')[0].classList.remove('active');
        this.classList.add('active');
        document.querySelectorAll('.show')[0].classList.remove('show');
        const aryTabs = Array.prototype.slice.call(tabHeader);
        const index = aryTabs.indexOf(this);
        tabBody[index].classList.add('show');
    };
});

