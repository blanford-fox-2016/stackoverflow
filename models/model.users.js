var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var connection = mongoose.createConnection("mongodb://localhost/stackoverflow");

autoIncrement.initialize(connection);

var userSchema = mongoose.Schema({
    username : { type: String, unique: true },
    password : String
    address : String,
    email : String
},{
  timestamps : true
});

userSchema.plugin(autoIncrement.plugin, 'users');

var users = mongoose.model('users', userSchema);

// make this available to our users in our Node applications
module.exports = users;
