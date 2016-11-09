const mongoose = require('mongoose')
var incrementQuestion = require('mongoose-increment');
const Schema = mongoose.Schema

const Question = new Schema({
    createdBy: Number,
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
            answer_votes: [
                {
                    type: Number,
                    foreignField: 'userId',
                    ref: 'users'
                }
            ]
        }
    ]
})

Question.plugin(incrementQuestion, {
    modelName: 'Question',
    fieldName: 'questionId',
});

module.exports = mongoose.model('Question', Question)