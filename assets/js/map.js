// Создание карты
var map = L.map('emigration-map').setView([48.8566, 2.3522], 4);

// Добавление тайлов карты
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Массив локаций
var locations = [
    { coords: [48.8566, 2.3522], name: "Париж - крупнейший центр русской эмиграции" },
    { coords: [52.5200, 13.4050], name: "Берлин - важный культурный и издательский центр" },
    { coords: [50.0755, 14.4378], name: "Прага - центр научной эмиграции" },
    { coords: [41.0082, 28.9784], name: "Константинополь - первый пункт эмиграции" }
];

// Добавление круглых маркеров на карту
locations.forEach(location => {
    L.circleMarker(location.coords, {
        radius: 6, // Размер точки
        fillColor: "#8B0000", // Бордовый цвет
        color: "#000", // Цвет границы
        weight: 1, // Толщина границы
        fillOpacity: 1 // Прозрачность заливки
    })
    .addTo(map)
    .bindPopup(`<b>${location.name}</b>`); // Добавляем попап с названием
});