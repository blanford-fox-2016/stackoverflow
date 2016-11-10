'use strict'

const Question = require('../models/question.server.model')

module.exports = {
  list: (req, res) => {
    Question
      .find()
      .then(questions => res.send(questions))
      .catch(err => res.send(err))
  },

  // creating question
  create: (req, res) => {
    let questionData = {
      question_id : req.body.question_id,
      //author : ?
      title : req.body.title,
      content: req.body.content
      //comment: ?,
      //votes: ?
    }
    Question
      .create(questionData)
      .then(question => res.send(question))
      .catch(err => res.send(err))
  },

  //Edit the question by its id
  update: (req, res) => {
    let updatedData = {
      title : req.body.title,
      content : req.body.content
    }

    let selection = {
      question_id : req.params.question_id
    }

    let option = {
      new : true,
      upsert : true
    }
    Question
      .findOneAndUpdate(selection, updateData, option)
      .then(question => res.json(question))
      .catch(err => res.json(err))
  },

  //Delete the question by its id
  delete: (req, res) => {
    Question
      .findOneAndRemove({question_id : req.params.question_id})
      .then(question => res.json(question))
      .err(err => res.json(err))
  },

  // GET the question by its id
  find: (req, res) => {
    Question
      .findOne({question_id : req.params.question_id})
      .then(question => res.json(question))
      .catch(err => res.json(err))
  }
}
