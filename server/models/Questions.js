const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let questionsSchema = new Schema({
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
        type: String,
        ref: 'Users'
      }  //type: should be like this --> Schema.Types.ObjectId
    },
    {
      timestamps: true
    }
  ],
  up: [
    {
      type: String, ref: 'Users'
    } //type: should be like this --> Schema.Types.ObjectId
  ],
  down: [
    {
      type: String, ref: 'Users'
    } //type: should be like this --> Schema.Types.ObjectId
  ],
  author: {
    type: String, ref: 'Users'
  }, //type: should be like this --> Schema.Types.ObjectId
  slug: {
    type: String,
    required: true
  }
},
{
  timestamps: true
});

let questions = mongoose.model('questions', questionsSchema)

module.exports = questions;
