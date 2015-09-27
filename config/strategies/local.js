var passport = require('passport');
var LocalStrategy = require('passport-local').LocalStrategy;
var user = require('../../models/user');

module.exports = function() {
  passport.use(new LocalStrategy(
    function(username, password, done) {
      User.findAsync({ name: username, password: password }, function (err, user) {
        if (err) { return done(err); }
        if (!user) {
          return done(null, false, { message: 'Incorrect username.' });
        }
        if (!user.validPassword(password)) {
          return done(null, false, { message: 'Incorrect password.' });
        }
        return done(null, user);
      });
    }
  ));
}
