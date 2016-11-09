const Question = require('../models/question')

module.exports = {
    seedQuestion: function (req, res) {
        const dataQuestion = [
            {
                createdBy:1,
                title: 'title a',
                content: 'content a',
                votes: [2],
                answers: [
                    {
                        createdBy: 1,
                        answer: "test answer from seeder",
                        answerVotes: []
                    }
                ]

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
    },

    addVoteQuestion: function (req, res) {
        Question.findOneAndUpdate({
            questionId: req.params.questionId
        }, {
            $push: {
                votes: req.body.userId
            }
        }, {
            new: true,
            upsert: false
        }, function (err, data) {
            if (err) res.json(err)
            else res.json(data)
        })
    },

    addAnswer: function (req, res) {
        Question.findOneAndUpdate({
            questionId: req.params.questionId
        }, {
            $push: {
                answers: {
                    createdBy: req.body.createdBy,
                    answer: req.body.answer
                }
            }
        }, {
            new: true,
            upsert: false
        }, function (err, data) {
            if (err) res.json(err)
            else res.json(data)
        })
    },

    voteAnswer: function (req, res) {
        Question.findOneAndUpdate({
            questionId: req.params.questionId
        }, {
            $push: {
                answerVotes: req.body.userId
            }
        }, {
            new: true,
            upsert: false
        }, function (err, data) {
            if (err) res.json(err)
            else res.json(data)
        })
    }
}