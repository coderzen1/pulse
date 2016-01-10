var store = require('./store');
var Location = require('./location');
var User = require('./user');
var Hotspot = require('./hotspot');

var OFFSET = 0.0015;

function filter(arr, klass) {
  var res = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] instanceof klass) {
      res.push(arr[i]);
    }
  }
  return res;
}


function createOffsetBounds(loc) {
  return {
    minLatLng: new Location(loc.lat - OFFSET, loc.lng - OFFSET),
    maxLatLng: new Location(loc.lat + OFFSET, loc.lng + OFFSET)
  };
}

function getUsersForFutureHotspot(loc) {
  var offsetBounds = createOffsetBounds(loc);
  var objects = store.get(offsetBounds.minLatLng, offsetBounds.maxLatLng);
  var users = filter(objects, User);

  return users;
}

function getNearestHotspotForLocation(loc) {
  var offsetBounds = createOffsetBounds(loc);
  var objects = store.get(offsetBounds.minLatLng, offsetBounds.maxLatLng);
  var hotspots = filter(objects, Hotspot);

  var nearsetHotspotLocation = loc.nearest(hotspots.map(function(hotspot) {
    return hotspot.location;
  }));

  for (var i = 0; i < hotspots.length; i++) {
    if (hotspots[i].location === nearsetHotspotLocation) {
      return hotspots[i];
    }
  }
}

module.exports = {
  getUsersForFutureHotspot: getUsersForFutureHotspot,
  getNearestHotspotForLocation: getNearestHotspotForLocation
};
