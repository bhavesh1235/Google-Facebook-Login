const GoogleStrategy = require("passport-google-oauth20").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const passport = require("passport");
const dotenv = require('dotenv');
dotenv.config();

const GOOGLE_CLIENT_ID ="208802649691-vob56efqtpcje7dnrdi5pk5l0d7qp643.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

FACEBOOK_APP_ID ="1092299961525767";
FACEBOOK_APP_SECRET = "d9fe5b3d1395a946c62723419ee30dfb";

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.use(
  new FacebookStrategy(
    {
      clientID: FACEBOOK_APP_ID,
      clientSecret: FACEBOOK_APP_SECRET,
      callbackURL: "/auth/facebook/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
