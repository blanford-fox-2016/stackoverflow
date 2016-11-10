'use strict'

const express = require('express');
const mongoose = require('mongoose');
const Question = require('../models/models.question');


//========================
// create question ======
//======================

let create = (req,res) => {

console.log(req.body);
    Question.create({
      questionId : Date.now(),
      question : req.body.question,
      title : req.body.title
    }, (err,data) => {
      if (err) {
        res.status(404)
      } else {
        console.log(data);
        res.status(200).json(data)
      }
    })

}

//========================
// Show All question =====
//=======================

let showAll = (req,res) => {
console.log(req.body);
  Question.find({}, (err,data) => {
    if (err) {
      res.status(404)
    } else {
      res.json(data)
    }
  })

}


//========================
// Delete question =====
//=======================

let deleteQuestion = (req,res) => {
console.log("ini delete");
console.log(req.params.id);
  Question.findByIdAndRemove(req.params.id,(err,data) => {
    if (err) {
      res.status(404)
    } else {
      console.log(data);
      res.json(data)
    }
  })

}


//========================
// Update question =====
//=======================

let update = (req,res) => {

console.log("ini update");

  Question.findOneAndUpdate({postId:req.params.id},

    {
      title:req.body.title,
      content: req.body.content
    },(err,question) => {
    if (err) {
      res.status(404)
    }else {
      console.log(question);
      res.json(question)
    }
  })

}



module.exports = ({

  create:create,
  showAll:showAll,
  update:update,
  deleteQuestion:deleteQuestion

})
