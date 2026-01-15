// Монголын төв координат
const map = L.map("map").setView([46.8625, 103.8467], 5);

// OpenStreetMap layer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "© OpenStreetMap contributors",
}).addTo(map);

// Marker-уудын жагсаалт
const locations = [
  {
    name: "Улаанбаатар",
    lat: 47.9184,
    lng: 106.9177,
  },
  {
    name: "Дархан",
    lat: 49.4867,
    lng: 105.9220,
  },
  {
    name: "Эрдэнэт",
    lat: 49.0278,
    lng: 104.0444,
  },
  {
    name: "Өмнөговь",
    lat: 43.0120,
    lng: 105.4690,
  },
];

// Олон marker нэмэх
locations.forEach((location) => {
  L.marker([location.lat, location.lng])
    .addTo(map)
    .bindPopup(`<b>${location.name}</b>`);
});
