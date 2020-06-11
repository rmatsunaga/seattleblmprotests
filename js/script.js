// Setting up your map
var mymap = L.map('mapid').setView([47.608013, 	-122.335167], 12);

// Type of map and attributes of map
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 21,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoicmV5bSIsImEiOiJja2I5M3J1ZmwwYWN2MzJvMHdreHhxaDJwIn0.olCVAYUagJ04orqE_BZtQA'
}).addTo(mymap);
//
// Marker location of Protest
// Popup when protest occurred
// add circle or polygon for downtown and capitol hill as mains
// add legend for circle to show which location is which

// downtown:
var downtown = L.polygon([
    [47.614852, -122.355517],
    [47.616736, -122.328378],
    [47.612461, -122.331148],
    [47.613157, -122.316482],
    [47.595879, -122.311658],
    [47.595839, -122.327315],
    [47.594139, -122.341853],
    [47.607894, -122.342038]
]);
downtown.setStyle({
  color: '#FF6347'
});
downtown.addTo(mymap)

var may29 = L.marker([47.6050, -122.3344]).addTo(mymap);
may29.bindPopup("Protest occurred on May 29th 2020 ");
var may31 = L.marker([47.6050, -122.3345]).addTo(mymap);
may31.bindPopup("Protest occurred on May 31 2020");


// cap hill
var capHill = L.polygon([
    [47.641346, -122.321647],
    [47.64245, -122.318055],
    [47.634463, -122.30177],
    [47.618979, -122.301235],
    [47.61418, -122.313691],
    [47.614232, -122.329157]
]);
capHill.setStyle({
  color: '#006400'
});
capHill.addTo(mymap)

var may29CapHill = L.marker([47.6253, -122.3221]).addTo(mymap);
may29CapHill.bindPopup("Protest occurred on May 29 2020");
var june06 = L.marker([47.6263, -122.3232]).addTo(mymap);
june06.bindPopup("Protest occurred on June 06 2020");
var june07 = L.marker([47.6243, -122.3243]).addTo(mymap);
june07.bindPopup("Protest occurred on June 07 2020");
var june08 = L.marker([47.6273, -122.3254]).addTo(mymap);
june08.bindPopup("Protest occurred on June 08 2020");

// random
var june09 = L.marker([47.6062, -122.3321]).addTo(mymap);
june09.bindPopup("Protest occurred on June 09 2020");
var june01 = L.marker([47.6173, -122.3195]).addTo(mymap);
june01.bindPopup("Protest occurred on June 01 2020");
var may30 = L.marker([47.6110, -122.3370]).addTo(mymap);
may30.bindPopup("Protest occurred on May 30 2020");

// // International District
var internationalDistrict = L.polygon([
    [47.60183, -122.328845],
    [47.601772, -122.324825],
    [47.599183, -122.321735],
    [47.599239, -122.314375],
    [47.595902, -122.311745],
    [47.595973, -122.327613]
]);
internationalDistrict.setStyle({
  color: '#0c297e'
});
internationalDistrict.addTo(mymap)

var may29Id = L.marker([47.5987, -122.3240]).addTo(mymap);
may29Id.bindPopup("Protest occurred on May 29 2020");


// var circle = L.circle([51.508, -0.11], {
//     color: 'red',
//     fillColor: '#f03',
//     fillOpacity: 0.5,
//     radius: 500
// }).addTo(mymap);
// var polygon = L.polygon([
//     [51.509, -0.08],
//     [51.503, -0.06],
//     [51.51, -0.047]
// ]).addTo(mymap);
//
// // Popups
// marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
// circle.bindPopup("I am a circle.");
// polygon.bindPopup("I am a polygon.");
// var popup = L.popup();
//
//
// // Events
// function onMapClick(e) {
//     popup
//         .setLatLng(e.latlng)
//         .setContent("You clicked the map at " + e.latlng.toString())
//         .openOn(mymap);
// }
//
// mymap.on('click', onMapClick)
//
// Legend stuff
var legend = L.control({position: 'bottomright'});

function getColor(d) {
  if (d == 0) {
    return '#0c297e'
  } else if (d == 1) {
    return '#006400'
  }
  return '#FF6347'
}

legend.onAdd = function (map) {

    var div = L.DomUtil.create('div', 'info legend'),
        grades = [0, 1, 2],
        labels = ['International District','Capitol Hill','Downtown'];

    // loop through our density intervals and generate a label with a colored square for each interval
    for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
            '<i style="background:' + getColor(grades[i]) + '"></i> ' +
            labels[i] + ('<br>');
    }

    return div;
};

legend.addTo(mymap);
