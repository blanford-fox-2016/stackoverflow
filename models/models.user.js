'use strict'

const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');
let connection = mongoose.createConnection("mongodb://localhost/myDatabase");
autoIncrement.initialize(connection);


let Schema = mongoose.Schema

let accountSchema = new Schema ({
  accountId : {type : Number, unique:true},
  firstname : String,
  username : {type:String,unique:true},
  email : {type:String,unique:true},
  password : String,
  blog : [{ type: Schema.Types.ObjectId, ref: 'Blog' }],
  comment : [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
  vote : [{ type: Schema.Types.ObjectId, ref: 'Vote' }]
})

accountSchema.plugin(autoIncrement.plugin, 'Account');

module.exports = mongoose.model("Account", accountSchema);
