exports.renderProfile = function(req, res) {
  res.render('profile/index', {
    title: 'Pulse App',
    user: req.user
  });
};

exports.renderUpdateProfile = function(req, res) {
  res.render('profile/update', {
    title: 'Pulse App',
    user: req.user
  });
  
  return res.redirect('/profile');
};
