'use strict'

const mongoose = require('mongoose')

const Schema = mongoose.Schema

let userSchema = new Schema({
  userID  : {
    type    : Number,
    unique  : true,
    required: true
  },
  username : {
    type    : String,
    unique  : true,
    required: true
  },
  profileName: {
    type    : String,
    unique  : true,
    required: true
  },
  email: {
    type    : String,
    unique  : true,
    required: true
  },
  password : {
    type      : String,
    required  : true,
    lowercase : true,
    trim      : true
  }
})

module.exports = mongoose.model('Users', userSchema)
