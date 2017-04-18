var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema ({

    first_name: String,
    last_name: String,
    dob: Date,
    email: String,
    username: String,
    password: String,
    gender: String

})

var User = mongoose.model('User', userSchema);

module.exports = User;
