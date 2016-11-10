'use strict'

const mongoose = require('mongoose')

const Schema = mongoose.Schema

let questionSchema = new Schema({
  questionID : {
    type : Number,
    required : true,
    unique: true
  },
  author : {
    type: Schema.Types.ObjectId,
    ref : 'Users'
  },
  title : {
    type : String,
    required : true
  },
  content : {
    type : String,
    required: true
  }
})

module.exports = mongoose.model('Question', questionSchema)
