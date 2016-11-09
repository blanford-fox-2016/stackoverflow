'use strict'

const mongoose = require('mongoose')

const passportLocalMongoose = require('passport-local-mongoose')

const Schema = mongoose.Schema


let UserSchema = new Schema({
  username : {
    type      : String,
    requires  : true
  },
  password : {
    type      : String,
    requires  : true,
    lowercase : true,
    trim      : true
  }
})

UsersSchema.plugin(passportLocalMongoose)

module.exports = mongoose.model('Users', UsersSchema)
