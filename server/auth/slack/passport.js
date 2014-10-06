exports.setup = function (User, config) {
  console.log("User: ", User);
  var passport = require('passport');
  var SlackStrategy = require('passport-slack').Strategy;

    passport.use(new SlackStrategy({
      clientID: config.slack.clientID,
      clientSecret: config.slack.clientSecret,
      callbackURL: config.slack.callbackURL
    },
    function(token, tokenSecret, profile, done) {
      console.log("token: ", token);
      User.findOne({
        'slack.id': profile.id
      }, function(err, user) {
        if(err) {
          return done(err);
        }
        if(!user) {
          user = new User({
            name: profile.displayName,
            role: 'user',
            provider: 'slack',
            slack: profile._json
          });
          user.save(function(err) {
            if(err) return done(err);
            user.token = token;
            return done(err, user);
          });
        } else {
          user.token = token;
          return done(err, user);
        }
      });
    })
  );
};