$(document).ready(function(){
	ymaps.ready(init); 
    function init () {            
        var map1 = new ymaps.Map('map1', {
            center: [55.818392, 37.447917], //1 карта
            zoom: 15
        });

        var map2 = new ymaps.Map('map2', {
            center: [55.682869, 37.888900], //2 карта
            zoom: 15
        });

        var map3 = new ymaps.Map('map3', {
            center: [44.757904, 37.741282], //3 карта
            zoom: 15
        });


 		var myPlacemark1 = new ymaps.Placemark(
			[55.818392, 37.447917], 
			{iconContent: '<div class="map1">улица Водников, 2с2</div>',},
			{preset: 'twirl#redIcon'});
 		var myPlacemark2 = new ymaps.Placemark(
			[55.682869, 37.888900], 
			{iconContent: '<div class="map2">Красная улица, 1 литД</div>',},
			{preset: 'twirl#redIcon'});
 		var myPlacemark3 = new ymaps.Placemark(
			[44.757904, 37.741282], 
			{iconContent: '<div class="map2">Новороссийск г., с. Кирилловка, ул. 2-я ж/д петля</div>',},
			{preset: 'twirl#redIcon'});

		map1.geoObjects.add(myPlacemark1);
		map2.geoObjects.add(myPlacemark2);
		map3.geoObjects.add(myPlacemark3);
        };



// $('.payment__postpayment').click(function(){
//   $('.payment__title').removeClass('check--active');
//   console.log(111111)
//   $(this).find('.payment__title').addClass('check--active');
// });

// $('.payment__prepayment').click(function(){
//   $('.payment__title').removeClass('check--active');
//   console.log(111111)
//   $(this).find('.payment__title').addClass('check--active');
// });

//Выпадающее меню
$('.gamburger').on('click', function(){
  // $('.main-menu').slideToggle(); //добавить если у фиксменю не будет дисплай блок
  $('.logo-item').hide();
  $('body').toggleClass('openmenu');
  $('.main-menu').toggleClass('fixmenu');
  // $('.main-menu').removeClass('fixmenu');
});


// $('.gamburger').on('click', function(){
// 	 this.clicked = this.clicked === undefined ? false : !this.clicked;
// if ( this.clicked ) {

//        $('.main-menu').removeClass('fixmenu');
//        $('body').removeClass('openmenu');
//        // alert('боги');
       
//     } else {
//     	$('.main-menu').addClass('fixmenu');
//     	$('body').addClass('openmenu');
//     	// alert('убивать');
//     }
// });

// $(window).resize(function () {
//     if($('.main-menu').css('display', 'none')  ){
//         $('.main-menu').removeClass('fixmenu');
//     };
// }
// if($(".main-menu").css('display') == 'none'){
//    $('body').removeClass('openmenu');
//    $('.main-menu').removeClass('fixmenu');
// }

$('[data-fancybox]').fancybox({
	});

var style = new YMaps.Style();
style.hasHint = false;

// //1-й слайдер
//  $('.slider-for').slick({
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   arrows: false,
//   fade: true,
//   asNavFor: '.slider-nav'
// });

// $('.slider-nav').slick({
//   slidesToShow: 5,
//   slidesToScroll: 1,
//   asNavFor: '.slider-for',
//   dots: false,
//   centerMode: true,
//   focusOnSelect: true
// });



// //Карусель с отзывами
// $('.responsive').slick({
//   dots: false,
//   infinite: true,
//   speed: 300,
//   slidesToShow: 2,
//   slidesToScroll: 2,
//   responsive: [
//     {
//       breakpoint: 1024,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         infinite: true,
//         dots: false
//       }
//     },
//     {
//       breakpoint: 790,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1
//       }
//     }
//   ]
// });

// //Карусель акций
// $('.one-time').slick({
//   dots: true,
//   infinite: true,
//   speed: 300,
//   slidesToShow: 1,
//   adaptiveHeight: true,
//   arrows: false
// });


// //Карусель на третьей странице

// $('.one-time-second').slick({
//   dots: false,
//   infinite: true,
//   speed: 300,
//   slidesToShow: 1,
//   adaptiveHeight: true,
//   arrows: true
// });

// карты


});

