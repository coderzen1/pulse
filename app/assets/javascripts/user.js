'use strict';

function User(id, email, location) {
  this.id = id;
  this.email = email;
  this.location = location;
  this.previousLocations = [];
}

User.prototype.updateLocation = function(newLoc) {
  this.previousLocations.push(this.location);
  this.location = newLoc;
};

User.prototype.previousLocation = function() {
  return this.previousLocations[this.previousLocations.length - 1];
};

module.exports = User;
