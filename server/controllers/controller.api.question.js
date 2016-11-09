const Question = require('../models/question')

module.exports = {
    seedQuestion: function (req, res) {
        const dataQuestion = [
            {
                createdBy:1,
                title: 'title a',
                content: 'content a',
                votes: [],
                answer: []

            }
        ]

        Question.create(dataQuestion, function (err, data) {
            if (err) res.json(err)
            else res.json(data)
        })
    },

    getQuestion: function (req, res) {
        Question.find(function (err, data) {
            if (err) res.json(err)
            else res.json(data)
        })
    },

    getQuestionByQuestionId: function (req, res) {
        Question.findOne({
            questionId: req.params.questionId
        }, function (err, data) {
            if (err) res.json(err)
            else res.json(data)
        })
    },

    addQuestion: function (req, res) {
        const question = {
            createdBy: req.body.createdBy,
            title: req.body.title,
            content: req.body.content,
            votes: [],
            answer: []
        }

        Question.create(question, function (err, data) {
            if (err) res.json(err)
            else res.json(data)
        })
    },

    deleteQuestionByQuestionId: function (req, res) {
        Question.findOneAndRemove({
            questionId: req.params.questionId
        }, function (err, data) {
            if (err) res.json(err)
            else res.json(data)
        })
    },

    deleteAllQuestion: function (req, res) {
        Question.remove({}, function (err, data) {
            if (err) res.json(err)
            else res.json("All question deleted")
        })
    },

    updateQuestion: function (req, res) {
        Question.findOneAndUpdate({
            questionId: req.params.questionId
        }, {
            title: req.body.title,
            content: req.body.content,
            votes: [],
            answer: []
        }, {
            new: true,
            upsert: true
        }, function (err, data) {
            if (err) res.json(err)
            else res.json(data)
        })
    }
}