var passport = require('passport');
var homepage = require('../controllers/homepage.server.controller');
var users = require('../controllers/users.server.controller');
var profile = require('../controllers/profile.server.controller');

module.exports = function(app) {

  app.get('/', homepage.render);

  app.route('/users').post(users.create).get(users.list);
  app.param('userId', users.userByID);
  app.route('/users/:userId').get(users.read).put(users.update).delete(users.delete);

  app.route('/register').get(users.renderRegister).post(users.register);

  app.route('/login')
    .get(users.renderLogin)
    .post(passport.authenticate('local', {
      successRedirect: '/',
      failureRedirect: '/login',
      failureFlash: true
    }));

  app.get('/logout', users.logout);

  app.get('/auth/facebook', passport.authenticate('facebook', {
    failureRedirect: '/login',
    scope: [
      'public_profile',
      'email',
      'user_friends'
    ]
  }));

  app.get('/auth/facebook/callback', passport.authenticate('facebook', {
    failureRedirect: '/login',
    successRedirect: '/',
    scope: [
      'public_profile',
      'email',
      'user_friends'
    ]
  }));

  app.get('/profile', profile.render);
  app.get('/update-profile', users.update);

};
