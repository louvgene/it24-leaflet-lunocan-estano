const map = L.map("map").setView([8.41493, 124.82822], 15);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  maxZoom: 19,
}).addTo(map);

const marker = L.marker([8.41493, 124.82822]).addTo(map);
marker.bindPopup("<b>Zone 2, Lunocan, Manolo Fortich, Bukidnon</b><p>Welcome to Estano House!🏠🥰 </p>");

L.circle([8.41493, 124.82822], {
  color: "green",
  fillColor: "#3dd347",
  fillOpacity: 0.3,
  radius: 500,
}).addTo(map);

map.on("click", function (event) {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  L.popup()
    .setLatLng(event.latlng)
    .setContent(
      "Latitude: " + lat.toFixed(5) + "<br>Longitude: " + lng.toFixed(5),
    )
    .openOn(map);
});

const locations = [
  { name: "Kitam-is Road Landmark", lat: 8.41266, lng:   124.82509, brgy: "Zone 3, Lunocan" },
  { name: "Zone Landmark", lat:  8.41442, lng: 124.82376, brgy: "Zone 1, Lunocan" },
  { name: "San-Isidro Landmark", lat: 8.41908, lng:  124.83318, brgy: "Zone 5, Lunocan" },
  
];

locations.forEach(function(place) {
    L.marker([place.lat, place.lng])
     .addTo(map)
        .bindPopup(place.name + "<br>" + place.brgy);
});

