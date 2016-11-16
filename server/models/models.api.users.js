'use strict'

const mongoose = require('mongoose')

const passportLocalMongoose = require('passport-local-mongoose')

const Schema = mongoose.Schema

let UsersSchema = new Schema({
  username : {
    type      : String,
    required  : true
  },
  password : String,
  up_vote: Boolean,
  down_vote: Boolean
},{
  timestamps: true
})

UsersSchema.plugin(passportLocalMongoose)

module.exports = mongoose.model('Users', UsersSchema)
