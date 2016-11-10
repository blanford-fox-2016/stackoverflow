const Users = require('../models/Users');

let getAll = (req, res, next) => {
  Users.find({}, (err, users) => {
    if (err) {
      console.log(err);
    } else {
      res.json(users);
    }
  })
}

let getOneByUsername = (req, res, next) => {
  Users.findOne({
    username: req.params.username
  }, (err, user) => {
    if (err) {
      console.log(err);
    } else {
      res.json(user);
    }
  })
}

let updateById = (req, res, next) => {
  Users.update({
    _id: req.params.id
  }, {
      name: req.body.name,
      email: req.body.email,
      username: req.body.username,
      dob: req.body.dob,
      photo: req.body.photo
  }, (err, edited) => {
    if (err) {
      console.log(err);
    } else {
      res.json(edited);
    }
  })
}

let deleteById = (req, res, next) => {

}

module.exports = {
  getAll: getAll,
  getOneByUsername: getOneByUsername,
  updateById: updateById,
  deleteById
}
