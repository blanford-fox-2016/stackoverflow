const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const increment = require('mongoose-increment');



const userSchema = new mongoose.Schema({
    userId: {
        type: Number,
        required: true
    },
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
    },
    email: {
        type: String,
        required: true,
        validate: {
            validator: function(email) {
                return /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(email)
            },
            message: 'Wrong email format'
        }
    },
    question: {
        type: Array,
        default: []
    },
    answer: [{
        type: Array,
        default: []
    }]
}, {
    timestamps: true
})

userSchema.plugin(increment, {
    modelName: 'User',
    fieldName: 'userId'
});


userSchema.plugin(passportLocalMongoose)

module.exports = mongoose.model('User', userSchema);
