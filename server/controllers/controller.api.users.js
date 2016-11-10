'use strict'

const Question = require('../models/model.api.users')

let showAllUsers = (req, res) => {
  Users
    .find({}, (err, all_users) => {
      if(err) res.status(400).json({'error': 'Error: ${err}'})
      if(!all_users) res.status(404).json({'message':'Failed to load all users'})

      res.status(200).json(all_users)
    })
}

let createUser = (req, res) => {
  Users.create({
    userID: req.body.userID,
    username: req.body.username,
    profileName: req.body.profileName,
    email: req.body.email,
    password: req.body.password
  },
  (err, new_user) => {
    console.log(new_user);
    if(err) res.status(400).json({'error': 'Error: ${err}'})
    if(!new_user) res.status(404).json({'message':'Error to create new user'})

    res.status(200).json(new_user)
  })
}

let showUser = (req, res) =>{
  userID: req.params.userID
},
(err, show_a_user) => {
  console.log(show_a_user);
  if(err) res.status(400).json({'error': 'Error: ${err}'})
  if(!show_a_user) res.status(404).json({'message':'Error to show a user'})

  res.status(200).json(show_a_user)
}

let editUser = (req, res) => {
  Users.findOneAndUpdate({
    userID: req.params.userID
  }, req.body,{
    new: true
  },(err, edit_user) => {
      if(err) res.status(400).json({'Error: ${err}'})
      if(!edit_user) res.status(404).json({'message':'Error to edit a user'})

      res.status(200).json(edit_user)
  })
}

let deleteUser = (req, res) => {
  Users.findOneandRemove({
    userID: req.params.userID
  }, (err, delete_user) => {
        if(err) res.status(400).json({'Error: ${err}'})
        if(!delete_user) res.status(404).json({'message':'Error to delete a user'})

        res.status(200).json(delete_user)
  })
}

module.exports = {
  showAllUsers,
  createUser,
  showUser,
  editUser,
  deleteUser
}
