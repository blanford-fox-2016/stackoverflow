const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Question = new Schema({
    createdBy: Number,
    questionId: Number,
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    votes: [
        {
            type: Number,
            foreignField: 'userId',
            ref: 'users'
        }
    ],
    answers: [
        {
            answerId: Number,
            createdBy: Number,
            answer: {
                type: String,
                required: true
            },
            votes: [
                {
                    type: Number,
                    foreignField: 'userId',
                    ref: 'users'
                }
            ]
        }
    ]
})

module.exports = mongoose.model('Question', Question)