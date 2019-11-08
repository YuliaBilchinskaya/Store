let mainMenu = document.querySelector(".nav_menu");
let openIcon = mainMenu.querySelector(".icon_menu");

openIcon.onclick = function() {
    mainMenu.classList.toggle("open");
  };

  
 ymaps.ready(function () {
 let map  = new ymaps.Map('map', {
 center: [53.900417, 27.562048],
 zoom: 18,
 });
 map.geoObjects.add(new ymaps.Placemark([53.900417, 27.562048], {
 balloonContent: "<strong>Адрес склада в Минске:</span> ул. Уличная, 46  <br/> Телефон отделения в Минске: +375 25 631-77-76</strong>"
 }, {
 preset: 'islands#icon',
 iconColor: '#af6ad9'
 }))
});
