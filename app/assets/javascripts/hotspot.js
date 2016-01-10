'use strict';

function Hotspot(id, type, location) {
  this.id = id;
  this.type = type;
  this.location = location;
}

Hotspot.prototype.getRadius = function() {

};

Hotspot.prototype.getUsers = function() {
  var hotspotUsers = [];

  if (User in hotspotRadius) {
    hotspotUsers.push(User);
  }
};

module.exports = Hotspot;
