$(document).ready(function(){
//   $('#gallery-thumbs').owlCarousel({
//     items: 3,
//     loop: true,
//     center: true,
//     responsive: {
//       680: {
//         items:4,
//       },
//       800: {
//         items:5,
//       },
//     }
//   });

//   var mainImageUrl = $('#gallery-start-photo').attr('href');
//   $('#gallery-main-pict').append('<img src="'+mainImageUrl+'" alt="">');

//   $('#gallery-thumbs a').on('click', function(e){
//     e.preventDefault();
//     var imgUrl = $(this).attr('href');
//     $('#gallery-main-pict').html('<img src="'+imgUrl+'" alt="">');
//   })



//Табы на главной странице

var tabs = document.querySelectorAll('.rest-type-switcher__tab .rest-type-switcher__item a');
var typeItem = document.querySelectorAll('.rest-type-switcher__type-item');

function changeTab(e) {
  e.preventDefault()
  for(var i=0; i<tabs.length; i++) {
    tabs[i].parentNode.classList.remove('rest-type-switcher__item--active');
    typeItem[i].classList.remove('rest-type-switcher__type-item--active');
  }
  e.target.parentNode.classList.add('rest-type-switcher__item--active');

  var link = e.target.getAttribute('href');
  document.querySelector(link).classList.add('rest-type-switcher__type-item--active');

}

for (var i=0; i<tabs.length; i++) {
  tabs[i].addEventListener('click', changeTab);
}



//Выпадающее меню
$('.gamburger').on('click', function(){
  $('.main-nav').slideToggle();
})

//1-й слайдер
 $('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
});

$('.slider-nav').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: false,
  centerMode: true,
  focusOnSelect: true
});



//Карусель с отзывами
$('.multiple-items').slick({
  infinite: true,
  speed: 350,
// определяем скорость перелистывания
  slidesToShow: 2,
//количество слайдов для показа
  slidesToScroll: 2,
//сколько слайдов за раз перелистнется
responsive: [
    {
      breakpoint: 800,
//сообщает, при какой ширине экрана нужно включать настройки
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      }
    }
]
});

//Карусель акций
$('.one-time').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true
});







// var buttonTitle = document.querySelectorAll('.type-digs__title');
// var typeOption = document.querySelectorAll('.type-digs__option');

// function changeTab(e) {
//   for(var i=0; i<buttonTitle.length; i++) {
//     buttonTitle[i].classList.remove('type-digs__title--active');
//     typeOption[i].classList.remove('type-digs__option--active');
//   }
//   e.currentTarget.classList.add('type-digs__title--active');
//   var index = buttonTitle.indexOf(this);
//   console.log(index);
//   // var link = event.target.getAttribute('href');
//   typeOption[index].classList.add('type-digs__option--active');

// }

// for (var i=0;i<buttonTitle.length; i++) { 
//   buttonTitle[i].addEventLinstener('click', changeTab()) 
// }



});