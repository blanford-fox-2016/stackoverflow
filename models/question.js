var mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    author: {
        type: String,
        required: true,
        ref: 'user'
    },
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    answer: [{
        type: String
    }],
    votes: [{
        type: Schema.Types.ObjectId,
        ref: 'user'
    }]
}, {
    timestamps: true
});

module.exports = mongoose.model('Question', questionSchema);
