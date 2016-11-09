'use strict'

const Question = require('../models/question');

// author
// title
// content
// answer
// votes

module.exports = {
    seedQuestion: function(req, res, next) {
        Question.create({
            author: req.body.author,
            title: req.body.title,
            content: req.body.content
        }, function(err, data) {
            if (err) {
                console.log(err);
                res.json({ message: `Error : ${err}` })
            } else {
                res.json({
                    data: data,
                    message: `New Question has been made by ${req.body.author}`
                })
            }
        })
    },
    getAllQuestion: function(req, res, next) {
        Question.find({}, function(err, data) {
            if (err) {
                console.log(err);
                res.json({ message: `Error: ${err}` })
            } else {
                res.json(data)
            }
        })
    },
    createQuestion: function(req, res, next) {
        Question.create({
            author: req.body.author,
            title: req.body.title,
            content: req.body.content
        }, function(err, data) {
            if (err) {
                console.log(err);
                res.json({ message: `Error : ${err}` })
            } else {
                res.json({
                    data: data,
                    message: `New Question has been made by ${req.body.author}`
                })
            }
        })
    },
    editQuestion: function(req, res, next) {
        Question.update({
            questionId: req.params.questionId
        }, {
            author: req.body.author,
            title: req.body.title,
            content: req.body.content
        }, function(err, data) {
            if (err) {
                console.log(err);
                res.json({ message: `Error : ${err}` })
            } else {
                res.json(data)
            }
        })

    },
    removeQuestion: function(req, res, next) {
        Question.remove({
            questionId: req.params.questionId
        }, function(err, data) {
            if (err) {
                console.log(err);
                res.json({ message: `Error: ${err}` })
            } else {
                res.json({
                    data: data,
                    message: `Question ID ${req.params.questionId} has been deleted`
                })
            }
        })

    },
    removeAllQuestion: function(req, res, next) {

    }
}
