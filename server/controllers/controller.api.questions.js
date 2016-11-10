'use strict'

const Question = require('../models/model.api.questions')

let showAllQuestion = (req, res) => {
  Question
    .find({}, (err, all_question) => {
      if(err) res.status(400).json({'error': 'Error: ${err}'})
      if(!all_question) res.status(404).json({'message':'Failed to load all question'})

      res.status(200).json(all_question)
    })
}

let createQuestion = (req, res) => {
  Question.create({
    title: req.body.title
    content: req.body.content
  },
  (err, new_question) => {
    console.log(new_question);
    if(err) res.status(400).json({'error': 'Error: ${err}'})
    if(!new_question) res.status(404).json({'message':'Error to create new question'})

    res.status(200).json(new_question)
  })
}

let showQuestion = (req, res) =>{
  questionID: req.params.questionID
},
(err, show_a_question) => {
  console.log(show_a_question);
  if(err) res.status(400).json({'error': 'Error: ${err}'})
  if(!show_a_question) res.status(404).json({'message':'Error to show a question'})

  res.status(200).json(show_a_question)
}

let editQuestion = (req, res) => {
  Question.findOneAndUpdate({
    questionID: req.params.questionID
  }, req.body,{
    new: true
  },(err, edited_question) => {
      if(err) res.status(400).json({'Error: ${err}'})
      if(!edited_question) res.status(404).json({'message':'Error to edit a question'})

      res.status(200).json(edited_question)
  })
}

let deleteQuestion = (req, res) => {
  Question.findOneandRemove({
    questionID: req.params.questionID
  }, (err, delete_question) => {
        if(err) res.status(400).json({'Error: ${err}'})
        if(!delete_question) res.status(404).json({'message':'Error to delete a data'})

        res.status(200).json(delete_question)
  })
}

module.exports = {
  showAllQuestion,
  createQuestion,
  showQuestion,
  editQuestion,
  deleteQuestion
}
