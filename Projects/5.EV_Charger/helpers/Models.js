const mongoose = require('mongoose');
const passportLocalMngoose = require('passport-local-mongoose');

let userSchema = new mongoose.Schema({
    Username: String,
    email: String,
    password: String,
    pw_confirm: String,
    created: String
});

userSchema.plugin(passportLocalMngoose);

module.exports = mongoose.model('Users', userSchema);