var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var questionSchema = new Schema({
  title : String,
  content : String,
  asker : {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  comments:[{
    comment: String,
    commenter: {
      type: Schema.Types.ObjectId,
      ref: 'users'
    }
  }],
  vote:[{
    type: Schema.Types.ObjectId,
    ref: 'users',
    unique: true
  }]
},{
timestamps : true
});


var questions = mongoose.model('questions', questionSchema);

// make this available to our users in our Node applications
module.exports = questions;
