// $(document).ready(function(){
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
// });

var tabs = document.querySelectorAll('.rest-type-switcher__item a');
var typeItem = document.querySelectorAll('.rest-type-switcher__type-item');

function changeTab(e) {
  for(var i=0; i<tabs.length; i++) {
    tabs[i].parentNode.classList.remove('rest-type-switcher__item--active');
    typeItem[i].classList.remove('rest-type-switcher__type-item--active');
  }
  e.target.parentNode.classList.add('rest-type-switcher__item--active');

  var link = event.target.getAttribute('href');
  document.querySelector(link).classList.add('rest-type-switcher__type-item--active');

}