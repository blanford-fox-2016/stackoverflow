const Question = require('../models/question')

module.exports = {
    seedQuestion: function (req, res) {
        const dataQuestion = [
            {
                createdBy: '58242dc607c8741ccfc21206',
                title: 'title a',
                content: 'content a'
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
        // req.body.user = "58242e4b9cbbe11ceaf48906"
        const question = {
            createdBy: req.body.user,
            title: req.body.title,
            content: req.body.content,
            votes: [],
            answer: []
        }

        console.log(question)

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
            content: req.body.content
        }, {
            new: true,
            upsert: false
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

    deleteAnswer: function (req, res) {
        Question.findOneAndUpdate({
            questionId: req.params.questionId
        }, {
            $pull: {
                answers: {
                    _id: req.params.id
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

    editAnswer: function (req, res) {
        Question.findOne({
            questionId: req.params.questionId,
            'answers._id': req.params.id
        }, function (err, data) {
            console.log(data)
            if (err) res.json(err)
            else res.json(data)
        })
    },

    updateAnswer: function (req, res) {
        Question.findOneAndUpdate({
            questionId: req.params.questionId,
            'answers._id': req.params.id
        }, {
            'answers.$.answer': req.body.answer
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