$(document).ready(function(){

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
$('.responsive').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 790,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
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
  adaptiveHeight: true,
  arrows: false
});


//Карусель на третьей странице

$('.one-time-second').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true,
  arrows: true
});




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


var buttonTitle = document.querySelectorAll('.type-digs__title');
var typeOption = document.querySelectorAll('.type-digs__option');

function changeTab(this) {
  for(var i=0; i<buttonTitle.length; i++) {
    buttonTitle[i].classList.remove('type-digs__title--active');
    typeOption[i].classList.remove('type-digs__option--active');
  }
  this.classList.add('type-digs__title--active');
  var idElement = this.attr('id');
  console.log(idElement);
  // var link = event.target.getAttribute('href');
  typeOption[index].classList.add('type-digs__option--active');

}

// for (var i=0;i<buttonTitle.length; i++) {
//   buttonTitle[i].addEventLinstener('click', changeTab())
// }



});

