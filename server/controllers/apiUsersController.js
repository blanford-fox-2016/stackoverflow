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

}

let updateById = (req, res, next) => {

}

let deleteById = (req, res, next) => {

}

module.exports = {
  getAll: getAll,
  getOneByUsername: getOneByUsername,
  updateById: updateById,
  deleteById
}
