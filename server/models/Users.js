'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

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
      type: String
    },
    dob: {
      type: Date,
      required: true
    },
    photo: {
      type: String
    },
},
{
  timestamps: true
});

usersSchema.plugin(passportLocalMongoose)
let Users = mongoose.model('Users', usersSchema)

module.exports = Users;
