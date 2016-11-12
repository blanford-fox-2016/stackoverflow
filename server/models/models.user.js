'use strict'

const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');
let connection = mongoose.createConnection("mongodb://localhost/myDatabase");
const passportLocalMongoose = require('passport-local-mongoose');
autoIncrement.initialize(connection);


let Schema = mongoose.Schema

let accountSchema = new Schema ({

  firstname : String,
  username : {
    type:String ,
    unique:true
  },
  email : {
    type : String ,
    required :true,
    unique : true
  },
  password : {
    type : String,
    required :true,
    lowercase :true,
    trim :true
  }

})
accountSchema.plugin(passportLocalMongoose);
accountSchema.plugin(autoIncrement.plugin, 'Account');

module.exports = mongoose.model("Account", accountSchema);
