
let burger = document.querySelector('.burger');
let nav = document.querySelector('.header__nav');

burger.addEventListener('click', burg);

function burg() {
  burger.classList.toggle('burger-active');
  if (nav.style.display === 'flex') {
    nav.style.display = 'none';
  } else {
    nav.style.display = 'flex';
  }

}








$('.class-mi').slick({
   dots: true,
   infinite: true,
   speed: 300,
   slidesToShow: 4,
   slidesToScroll: 4,
   responsive: [
     {
       breakpoint: 1024,
       settings: {
         slidesToShow: 3,
         slidesToScroll: 3,
         infinite: true,
         dots: true
       }
     },
     {
       breakpoint: 600,
       settings: {
         slidesToShow: 2,
         slidesToScroll: 2
       }
     },
     {
       breakpoint: 480,
       settings: {
         slidesToShow: 1,
         slidesToScroll: 1
       }
     }
   ]

 });


//  Подлючение библиотеки MixItUp
$(function() {
  var mixer = mixitup('.special__block-cart');
});

