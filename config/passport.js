var passport = require('passport');

module.exports = function() {
  var User = require('../models/user');

  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    User.getByIdAsync(id).then(user => done(null, user)).catch(err => done(err))
      });

  require('./strategies/local.js')();
};
