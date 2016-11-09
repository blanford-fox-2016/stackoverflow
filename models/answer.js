const mongoose = require('mongoose');
const increment = require('mongoose-increment');

const answerSchema = new mongoose.Schema({
    answerId: {
        type: String,
        required: true
    },
    answer_title: {
        type: String,
        required: true
    },
    answer_content: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

answerSchema.plugin(increment, {
    modelName: 'Answer',
    fieldName: 'answerId'
});

module.exports = mongoose.model('Answer', answerSchema);
