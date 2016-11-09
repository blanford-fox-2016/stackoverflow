var mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    answer: [{
        type: Schema.Types.ObjectId,
        ref: 'answer'
    }],
    votes: [{
        type: Schema.Types.ObjectId,
        ref: 'user'
    }]
}, {
    timestamps: true
});

module.exports = mongoose.model('Question', questionSchema);
