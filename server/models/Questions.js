const mongoose = require('mongoose');

let questionsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  answers: [
    {
      title: {
        type: String,
        required: true
      },
      content: {
        type: String,
        required: true
      },
      author:{
        type: Schema.Types.ObjectId,
        ref: 'Users'
      }
      timestamps: true
    }
  ],
  up: [
    {
      type: Schema.Types.ObjectId, ref: 'Users'
    }
  ],
  down: [
    {
      type: Schema.Types.ObjectId, ref: 'Users'
    }
  ],
  author: {
    type: Schema.Types.ObjectId, ref: 'Users'
  },
  timestamps: true
});

let questions = mongoose.model('questions', questionsSchema)

module.exports = questions;
