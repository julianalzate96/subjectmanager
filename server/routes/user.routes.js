const express = require('express');
const passport = require('passport');
const route = express.Router();
const userctrl = require('../controllers/user.controller');

require('../config/passport')(passport);

route.get('/', userctrl.getUser);
route.post('/register', userctrl.addUser);
route.post('/authenticate', userctrl.authenticate);
route.get('/profile', passport.authenticate('jwt', {session: false}),(req, res) => {
    console.log(req.headers);
    res.json({msg: 'test'});
})

module.exports = route;