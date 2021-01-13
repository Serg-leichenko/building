let swiper = new Swiper('.swiper-container', {
  navigation: {
    nextEl: '.next',
    prevEl: '.prev',
  },
});

$('.menu-icon').click(function(){
  $(this).toggleClass('clicked');
  $('.menu').toggle();
});