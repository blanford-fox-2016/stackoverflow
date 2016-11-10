'use strict'

const ModelUser = require('../models/user');
const passport = require('passport');

module.exports = {
    registerProcess: function(req, res, next) {
        ModelUser.register({
            name: req.body.name,
            username: req.body.username,
            email: req.body.email
        }, req.body.password, function(err, result) {
            if (err) {
                console.log(err);
                res.json({ message: `Error: ${err}` })
            } else {
                passport.authenticate('local')(req, res, function() {
                    req.session.save(function(err, next) {
                        if (err)
                            return next(err)
                        console.log(result);
                        res.json({
                            userId: result.userId,
                            name: result.name,
                            username: result.username,
                            email: result.email,
                            message: `Registration Success`
                        })
                    })
                })
            }
        })

    },
    loginProcess: function(req, res, next) {
        req.session.save((err) => {
            if (err) {
                console.log(err);
                res.json({ message: `Error : ${err}` })
            } else {
                res.json({ message: `Session Confirmed` })
            }
        })
    },
    seedUser: function(req, res, next) {

    },
    getAllUser: function(req, res, next) {},
    getUser: function(req, res, next) {},
    updateUser: function(req, res, next) {},
    removeUser: function(req, res, next) {},
    removeAllUser: function(req, res, next) {}
}
