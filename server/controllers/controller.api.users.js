const User = require('../models/user')
const passport = require('passport')

module.exports = {
    seedUser: function (req, res) {
        const dataUser = [
            {
                userId: '1',
                name: 'name a',
                username: 'username a',
                password: 'passworda',
                email: 'aaa@gmail.com',
            },
            {
                userId: '2',
                name: 'name b',
                username: 'username b',
                password: 'passwordb',
                email: 'bbb@gmail.com',
            }
        ]

        User.create(dataUser, function (err, data) {
            if (err) res.json(err)
            else res.json(data)
        })
    },

    getUser: function (req, res) {
        User.find(function (err, data) {
            if (err) res.json(err)
            else res.json(data)
        })
    },

    getUserByUserId: function (req, res) {
        User.findOne({
            userId: req.params.userId
        }, function (err, data) {
            if (err) res.json(err)
            else res.json(data)
        })
    },

    localRegisterUser: function (req, res) {
        User.register(new User({
            userId: req.body.userId,
            name: req.body.name,
            username: req.body.username,
            email: req.body.email
        }), req.body.password, function (err, data) {
            if (err) res.json(err)
            else {
                passport.authenticate('local')(req, res, function () {
                    req.session.save(function (err) {
                        if (err) res.json(err)
                        else res.json(data)
                    })
                })
            }
        })
    },

    deleteUserByUserId: function (req, res) {
        User.findOneAndRemove({
            userId: req.params.userId
        }, function (err, data) {
            if (err) res.json(err)
            else res.json(data)
        })
    },

    deleteAllUsers: function (req, res) {
        User.remove({}, function (err, data) {
            if (err) res.json(err)
            else res.json("All users deleted")
        })
    },

    updateUser: function (req, res) {
        User.findOneAndUpdate({
            userId: req.params.userId
        }, {
            name: req.body.name,
            username: req.body.username,
            email: req.body.email
        }, {
            new: true,
            upsert: true
        }, function (err, data) {
            if (err) res.json(err)
            else res.json(data)
        })
    },

    loginUser: function (req, res) {

    }
}