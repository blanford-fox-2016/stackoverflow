'use strict'

const mongoose = require('mongoose')

const increment = require('mongoose-increment')

const Schema = mongoose.Schema

let QuestionSchema = new Schema({
  questionId  : {
    type      : Number,
    required  : true,
    unique    : true
  },
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

QuestionSchema.plugin(increment, {
  modelName : 'Questions',
  fieldName : 'questionId',
  start     : 0,
  increment : 1
});

module.exports = mongoose.model('Questions', QuestionSchema)
