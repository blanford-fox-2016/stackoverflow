'use strict'

const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');
let connection = mongoose.createConnection("mongodb://localhost/myDatabase");
autoIncrement.initialize(connection);


let Schema = mongoose.Schema

let questionSchema = new Schema ({
  questionId : {type : Number, unique:true},
  question : String,
  title : {type:String, min: 5, max: 20}
})

questionSchema.plugin(autoIncrement.plugin, 'Question');

module.exports = mongoose.model("Question", questionSchema);
