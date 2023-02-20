const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const User = require("./models/User");

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      const { id, name, photos } = profile;
      User.findOne(
        { identities: { provider: "google", userID: id } },
        (err, userMatch) => {
          if (err) {
            console.log(err);
            return done(null, false);
          }

          //if there is existing user with googleId
          if (userMatch) {
            return done(null, userMatch);
          } else {
            const newUser = new User({
              firstname: name.giveName,
              lastname: name.familyName,
              identities: [{ provider: "google", userID: id }],
            });

            newUser.save((err, savedUser) => {
              if (err) {
                console.log(err);
                return done(null, false);
              } else {
                return done(null, savedUser);
              }
            });
          }
        }
      );
    }
  )
);

passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.FACEBOOK_APP_ID,
      clientSecret: process.env.FACEBOOK_APP_SECRET,
      callbackURL: "/auth/facebook/callback",
    },
    function (accessToken, refreshToken, email, profile, done) {
      const { id, name } = profile;
      User.findOne(
        { identities: { provider: "facebook", userID: id } },
        (err, userMatch) => {
          if (err) {
            console.log(err);
            return done(null, false);
          }

          //if there is existing user with googleId
          if (userMatch) {
            return done(null, userMatch);
          } else {
            const newUser = new User({
              firstname: name.giveName,
              lastname: name.familyName,
              identities: [{ provider: "facebook", userID: id }],
            });

            newUser.save((err, savedUser) => {
              if (err) {
                console.log(err);
                return done(null, false);
              } else {
                return done(null, savedUser);
              }
            });
          }
        }
      );
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

export default passport;
