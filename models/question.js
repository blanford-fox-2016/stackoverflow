var mongoose = require('mongoose');
const increment = require('mongoose-increment');


const questionSchema = new mongoose.Schema({
    questionId: {
        type: Number,
        required: true
    },
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
    answer: {
        type: Array,
        default: []
    },
    votes: {
        type: Array,
        default: []
    }
}, {
    timestamps: true
});

questionSchema.plugin(increment, {
    modelName: 'Question',
    fieldName: 'questionId'
});


module.exports = mongoose.model('Question', questionSchema);
