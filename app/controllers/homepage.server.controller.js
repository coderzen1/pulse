exports.render = function(req, res) {
  res.render('homepage/index', {
    title: 'Pulse App',
    user: req.user
  });
};
