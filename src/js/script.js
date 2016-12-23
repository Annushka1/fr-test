$(document).ready(function(){

$('.payment__postpayment').click(function(){
  $('.payment__title').removeClass('check--active');
  console.log(111111)
  $(this).find('.payment__title').addClass('check--active');
});

$('.payment__prepayment').click(function(){
  $('.payment__title').removeClass('check--active');
  console.log(111111)
  $(this).find('.payment__title').addClass('check--active');
});

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

// Календарь
$( function() {
    var from = $( "#start" ).datepicker()
        .on( "change", function() {
          to.datepicker( "option", "minDate", getDate( this ) );
          var date = $(this).datepicker('getDate');
          $( "#start-d" ).text( date.getDate() );
          $( "#start-m" ).text( date.getMonth() + 1 );
          $( "#start-y" ).text( date.getFullYear() );
        }),
      to = $( "#fin" ).datepicker()
        .on( "change", function() {
          from.datepicker( "option", "maxDate", getDate( this ) );
          var date = $(this).datepicker('getDate');
          $( "#fin-d" ).text( date.getDate() );
          $( "#fin-m" ).text( date.getMonth() + 1 );
          $( "#fin-y" ).text( date.getFullYear() );
        });
 
    function getDate( element ) {
      var date;
      try {
        date = $.datepicker.parseDate( "mm/dd/yy", element.value );
      } catch( error ) {
        date = null;
      }
 
      return date;
    }
  } );

 //
 // $(".fancybox-thumb").fancybox();




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
};


});

