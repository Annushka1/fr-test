

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