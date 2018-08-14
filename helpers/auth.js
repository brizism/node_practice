module.exports = {
  ensureAuthenticated: function(req, res, next){
    // isAuthenticated() is from passport
    if(req.isAuthenticated()){
      return next();
    }
    res.redirect('/');
  },
  ensureGuest: function(req, res, next){
    if(req.isAuthenticated()){
      res.redirect('/dashboard');
    } else {
      return next();
    }
    
  }
}