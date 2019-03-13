const User = require('../models/user');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/config');
const bcrypt = require('bcrypt-nodejs');
const userctrl = {};

userctrl.getUser = async (req, res) => {
    const user = await User.find();
    res.json(user);
}

userctrl.addUser = async (req, res) => {
    const Newuser = new User();
    Newuser.userName = req.body.userName;
    Newuser.email = req.body.email;
    Newuser.password = Newuser.encrypt(req.body.password);
    await Newuser.save();
    res.json({
        status: 'User Added'
    })
}

userctrl.authenticate = (req, res) => {
    User.find({email: req.body.email})
        .then(user => {
            if(user[0] == null){
                return res.json({success: false, msg: 'User not found'});
            }else{
                if(userctrl.compare(req.body.password, user[0].password)){
                    const token = jwt.sign(user[0].toJSON(), config.secret, {
                        expiresIn: 604800
                    });

                    res.json({
                        success: true,
                        token: 'JWT' + token,
                        user: {
                            id: user[0]._id,
                            username: user[0].userName,
                            email: user[0].email

                        }
                    });
                }else{
                    return res.json({ success: false, msg: 'Wrong Password'});
                }
            }
        })
        .catch(err => {
            console.log(err);
        })
}

userctrl.compare = (clientpassword, password) => {
    return bcrypt.compareSync(clientpassword, password);
}

module.exports = userctrl;