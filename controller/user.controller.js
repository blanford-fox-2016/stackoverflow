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
    getAllUser: function(req, res, next) {
        ModelUser.find({}, function(err, data) {
            if (err) {
                console.log(err);
                res.json({ message: `Error: ${err}` })
            } else {
                res.json(data)
            }
        })
    },
    getUser: function(req, res, next) {
        ModelUser.findOne({
            userId: req.params.id
        }, function(err, data) {
            if (err) {
                console.log(err);
                res.json({ message: `Error: ${err}` })
            } else {
                res.json(data)
            }
        })
    },
    updateUser: function(req, res, next) {
        ModelUser.findOneAndUpdate({
            userId: req.params.id
        }, req.body, {
            new: true
        }, function(err, data) {
            if (err) {
                console.log(err);
                res.json({ message: `Error : ${err}` })
            } else {
                res.json({
                    name: data.name,
                    username: data.username,
                    email: data.email
                })
            }
        })
    },
    removeUser: function(req, res, next) {
        ModelUser.findOneAndRemove({
            userId: req.params.id
        }, function(err, data) {
            if (err) {
                console.log(err);
                res.json({ message: `Error : ${err}` })
            } else {
                console.log(data);
                res.json({ message: `Delete Successfull` })
            }
        })
    },
    removeAllUser: function(req, res, next) {
        ModelUser.remove({}, function(err) {
            if (err) {
                console.log(err);
                res.json({ message: `Error : ${err}` })
            } else {
                res.json({ message: `All user deleted succesfully` })
            }
        })
    }
}
