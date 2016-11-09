const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let usersSchema = new Schema({
  name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    dob: {
      type: Date,
      required: true
    },
    photo: {
      type: String
    },
{
  timestamps: true
});

let users = mongoose.model('users', usersSchema)

module.exports = users;
