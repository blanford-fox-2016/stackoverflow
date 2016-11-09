'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const questionSchema = new Schema({
  quest_id : {
    type : Number,
    required : true,
    unique: true
  },
  title : {
    type : String,
    required : true
  },
  content : {
    type : String,
    required: true
  },
  comments : [{
    comment : {
      type: String,
      comment_id : Number,
      required : true
    }
  }],
  votes : {
    type : Number
  }
})

module.exports = mongoose.model('Question', questionSchema)
