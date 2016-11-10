'use strict'

const mongoose = require('mongoose')

const passportLocalMongoose = require('passport-local-mongoose')

const Schema = mongoose.Schema

let UsersSchema = new Schema({
  userId  : Number,
  username : {
    type      : String,
    required  : true
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
