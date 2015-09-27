var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require('../../models/user');

module.exports = function() {
  passport.use(new LocalStrategy(
    function(username, password, done) {
      User.findAsync({ name: username, password: password })
        .then(user => {
          console.log(user, "user");
          if (!user) {
            return done(null, false, { message: 'Incorrect username.' });
          } else {
            return done(null, user);
          }
        })
        .catch( err => done(err));
    }
  ));
}
