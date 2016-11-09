'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema
require('mongoose-type-email')

const userSchema = new Schema({
  user_id : {
    type : Number,
    unique : true,
    required : true
  },
  username : {
    type : String,
    unique : true,
    required : true
  },
  name : {
    type : String,
    required : true
  },
  email : {
    type: mongoose.SchemaTypes.Email,
    required :true,
    unique: true
  },
  password : {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('User', userSchema)
