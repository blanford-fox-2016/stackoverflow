'use strict'

const User = require('../models/user.server.model')

module.exports = {

  // get all users
  list: (req, res) => {
    User
      .find()
      .then(users => res.json(users))
      .catch(err => res.json(err))
  },

  // create one user
  create: (req, res) => {
    let userData = {
      user_id: req.body.user_id,
      username : req.body.username,
      name : req.body.name,
      email: req.body.email,
      password: req.body.password
    }

    User
      .create(userData)
      .then(user => res.json(user))
      .catch(err => res.json(err))
  },

  // update user by his/her username
  update: (req, res) => {
    // updating stuff
    let userUpdate = {
      name : req.body.name,
      email: req.body.email,
      password: req.body.password
    }

    let selection = {
      username : req.params.username
    }

    let option = {
      new : true,
      upsert : true
    }

    // user update
    User
      .findOneAndUpdate( selection, userUpdate, option)
      .then(user => res.json(user))
      .catch(err => res.json(err))
  },

  // delete user by his/her username

  delete: (req, res) => {
    User
      .findOneAndRemove({ username : req.params.username })
      .then(() => res.json({message : `${req.params.username} has been deleted` }))
      .catch(err => res.json(err))
  },

  // FInd user by his or her id
  find: (req, res) => {
    User
      .findOne({ username: req.params.username })
      .then(user => res.json(user))
      .catch(err => res.json(err))
  }


}
