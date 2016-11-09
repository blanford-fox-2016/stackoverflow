const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
    }
    email: {
        type: String,
        required: true,
        validate: {
            validator: function(email) {
                return /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(email)
            },
            message: ''
            Wrong email format
        }
    },
    question: [{
        type: Schema.Types.ObjectId,
        ref: 'question'
    }],
    answer: [{
        type: Schema.Types.ObjectId,
        ref: 'answer'
    }]
}, {
    timestamps: true
})

userSchema.plugin(passportLocalMongoose)

module.exports = mongoose.model('User', userSchema);
