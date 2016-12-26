$(document).ready(function(){
var from = $( "#start" ).datepicker(
  {
 monthNames: ['Январь', 'Февраль', 'Март', 'Апрель',
'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь',
'Октябрь', 'Ноябрь', 'Декабрь'],
 dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
 firstDay: 1,
})
  .on( "change", function() {
    to.datepicker( "option", "minDate", getDate( this ) );
    var date = $(this).datepicker('getDate');
    $( "#start-d" ).text( date.getDate() );
    $( "#start-m" ).text( date.getMonth() + 1 );
    $( "#start-y" ).text( date.getFullYear() );
   }),
   to = $( "#fin" ).datepicker(
    {
 monthNames: ['Январь', 'Февраль', 'Март', 'Апрель',
'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь',
'Октябрь', 'Ноябрь', 'Декабрь'],
 dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
 firstDay: 1,
})
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

});
var buttonTitle = document.querySelectorAll('.type-digs__title');
var typeOption = document.querySelectorAll('.type-digs__option');
console.log()
function changeOffer(e) {
  for(var i=0; i<buttonTitle.length; i++) {
    buttonTitle[i].classList.remove('type-digs__title--active');
    typeOption[i].classList.remove('type-digs__option--active');
  }
  e.target.classList.add('type-digs__title--active');
  var idElement = e.target.getAttribute('id');
  console.log("he is alive!");
  var ulActive = document.getElementsByClassName(idElement);
  console.log(ulActive);

  for (var i=0; i<ulActive.length; i++) {
    ulActive[i].classList.add('type-digs__option--active');
  }
}

for (var i=0;i<buttonTitle.length; i++) {
  buttonTitle[i].addEventListener('click', changeOffer)
}