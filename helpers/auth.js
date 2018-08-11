module.exports = {
  ensureAuthenticated: function (req, res, next) {
    if(req.isAuthenticated()){ // passport
      return next(); // call the next piece of middleware
    }
    // if not, then redirect
    req.flash('error_msg', 'Not Authorized');
    res.redirect('/users/login');
  }
}