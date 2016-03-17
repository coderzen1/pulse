var mymap = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'coderzen.pea2fncl',
    accessToken: 'pk.eyJ1IjoiY29kZXJ6ZW4iLCJhIjoiY2lsdnp1c3I4MDA5ZnVvbTR3ZGJwZ2diYiJ9.IY5Ft0-JPC0Euf4_dlQybQ'
}).addTo(mymap);
