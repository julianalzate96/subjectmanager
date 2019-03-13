const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
const { Schema } = mongoose;

const UserSchema = new Schema({
    userName: { type: String, required: true },
    email: { type: String, require: true },
    password: { type: String, required: true }
});

UserSchema.methods.encrypt = (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
}

module.exports = mongoose.model('User', UserSchema);