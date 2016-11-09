'use strict'

const mongoose = require('mongoose')

const Schema = mongoose.Schema

let QuestionSchema = new Schema({
  questionId  : Number,
  content     : {
    type      : String,
    required  : true
  },
  author: {
    type  : Schema.Types.ObjectId,
    ref   : 'Users'
  },
  comment : [{
      commentId: Number,
      content : {
        type      : String,
        required  : true
      },
      author: {
        type  : Schema.Types.ObjectId,
        ref   : 'Users'
      }
  }],
  votes : [{
    type  : Schema.Types.ObjectId,
    ref   : 'Users'
    }]
})

module.exports = mongoose.model('Questions', QuestionSchema)
