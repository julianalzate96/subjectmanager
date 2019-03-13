const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../models/user');
const config = require('../config/config');

module.exports = (passport) => {
    console.log('hola');
    let opts = {};
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt');
    opts.secretOrKey = config.secret;
    passport.use(new JwtStrategy(opts,(jwt_payload, done) => {
        User.findById(jwt_payload._doc._id, (err, user) => {
            if(err){
                console.log('1');
                return done(err, false);
            }
            if(user){
                console.log('2')
                return done(null, user);
            }else{
                console.log('3')
                return done(null, false);
            }
        })
    }))
}