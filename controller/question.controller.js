'use strict'

const Question = require('../models/question');

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
                res.json({
                    author: data[0].author,
                    title: data[0].title,
                    content: data[0].content,
                    message: `This is all list of question`
                })
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
                    author: data.author,
                    title: data.title,
                    content: data.content,
                    message: `New Question has been made by ${req.body.author}`
                })
            }
        })
    },
    editQuestion: function(req, res, next) {
        Question.findOneAndUpdate({
            questionId: req.params.id
        }, req.body, { new: true }, function(err, data) {
            if (err) {
                console.log(err);
                res.json({ message: `Error : ${err}` })
            } else {
                res.json({
                    author: data.author,
                    title: data.title,
                    content: data.content,
                    message: `Question title updated to ${data.title}`
                })
            }
        })

    },
    removeQuestion: function(req, res, next) {
        Question.findOneAndRemove({
            questionId: req.params.id
        }, function(err, data) {
            if (err) {
                console.log(err);
                res.json({ message: `Error: ${err}` })
            } else {
                console.log(data);
                res.json({
                    message: `Question has been deleted`
                })
            }
        })

    },
    removeAllQuestion: function(req, res, next) {
        Question.remove({}, function(err) {
            if (err) {
                console.log(err);
                res.json({ message: `Error : ${err}` })
            } else {
                res.json({ message: `All question deleted succesfully` })
            }
        })

    }
}
