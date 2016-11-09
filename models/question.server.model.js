'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const questionSchema = new Schema({
  quest_id : {
    type : Number,
    required : true,
    unique: true
  },
  author : {
    type: Schema.Types.ObjectId,
    ref : 'User'
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
    type: String,
    comment_id : Number,
    commentator : {
      type : Schema.Types.ObjectId,
      ref : 'User'
    }
  }],
  votes : [{
    type : Schema.Types.ObjectId,
    ref : 'User',
    unique : true
  }]
})

module.exports = mongoose.model('Question', questionSchema)
