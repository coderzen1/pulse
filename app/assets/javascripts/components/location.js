'use strict';

var turf = require('turf');

function Location(lat, lng, timestamp) {
  this.lat = lat;
  this.lng = lng;
  this.createdAt = timestamp || Date.now();
}

Location.prototype.latLngArray = function() {
  return [this.lat, this.lng];
};

Location.prototype.latLng = function() {
  return {
    lat: this.lat,
    lng: this.lng
  };
};

Location.prototype.turfPoint = function() {
  return turf.point([this.lng, this.lat], {
    location: this
  });
};

Location.prototype.compareToTurfPoint = function(turfPoint) {
  return this.lng === turfPoint.geometry.coordinates[0] && this.lng === turfPoint.geometry.coordinates[1];
};

Location.prototype.nearest = function(against) {
  var nearestTurfPoint = turf.nearest(this.turfPoint(), turf.featurecollection(against.map(function(againstLocation) {
    var turfPoint = againstLocation.turfPoint();
    return turfPoint;
  })));

  return nearestTurfPoint ? nearestTurfPoint.properties.location : null;
};

Location.newFromArray = function(arr) {
  return new Location(arr[0], arr[1]);
};

module.exports = Location;
