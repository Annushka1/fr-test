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
  }); 
