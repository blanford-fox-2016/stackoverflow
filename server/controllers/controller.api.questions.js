'use strict'
const passport = require('passport')
const Question = require('../models/models.api.questions')

let addQuestion = (req, res) => {
  console.log(`add question`);
  Question.create({
    questionId : 1,
    content: req.body.content,
    // author : req.user._id,
    comment : [],
    votes : []
  }, (err, new_data) => {
    console.log(new_data);
    if(err) res.status(400).json({'error': 'Error: ${err}'})
    if(!new_data) res.status(404).json({'message': 'Failed to add question'})

    res.status(200).json(new_data)
  })
}

let showQuestion = (req, res) => {
  Question.findOne({
    questionId : req.params.questid
  }, (err, show_one_data) => {
    if(err) res.status(400).json({'error': 'Error: ${err}'})
    if(!show_one_data) res.status(404).json({'message': 'Failed to show question'})

    res.status(200).json(show_one_data)
  })
}

let editQuestion = (req, res) => {
  console.log(`edit question`);
  console.log(res.body);
  Question.findOneAndUpdate({
    questionId : req.params.questid
  }, req.body, {
    new : true
  }, (err, edited_data) => {
    if(err) res.status(400).json({'error': 'Error: ${err}'})
    if(!edited_data) res.status(404).json({'message': 'Failed to edit question'})

    res.status(200).json(edited_data)
  })
}

let deleteQuestion = (req, res) => {
  Question.findOneAndRemove({
    questionId : req.params.questid
  }, (err, deleted_data) => {
    if(err) res.status(400).json({'error': 'Error: ${err}'})
    if(!deleted_data) res.status(404).json({'message': 'Failed to delete question'})

    res.status(200).json(deleted_data)
  })
}

module.exports = {
  addQuestion : addQuestion,
  showQuestion : showQuestion,
  editQuestion : editQuestion,
  deleteQuestion : deleteQuestion
}
/*
,
addComment : addComment,
editComment : editComment,
deleteComment : deleteComment,
addVote : addVote,
deleteVote: deleteVote
*/
