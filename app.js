process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var config = require('./config/config');
var mongoose = require('./config/mongoose');
var express = require('./config/express');
var passport = require('./config/passport');

var HttpServer = require('http').Server;
var socketIo = require('socket.io');

var db = mongoose();
var app = express();
passport = passport();

var server = new HttpServer(app);
var io = socketIo(server);

io.on('connection', function(socket) {
  console.log('a user connected');
});

server.listen(config.port, function() {
  console.log(process.env.NODE_ENV + ' server running at http://localhost:' + config.port);
});

module.exports = app;
