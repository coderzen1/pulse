exports.render = function(req, res) {
  res.render('profile/index', {
    title: 'Pulse App',
    user: req.user
  });
};
