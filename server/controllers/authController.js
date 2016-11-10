const Users = require('../models/Users');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

let register = (req, res, next) => {
  Users.register({
    name: req.body.name,
    email: req.body.email,
    username: req.body.username,
    dob: req.body.dob
  }, req.body.password, (err, user) => {
    if (err) {
      console.log(err);
      res.send(err, { alert: 'Oh, snap! Your regisration was unsuccessfull!'})
    } else {
      passport.authenticate('local')(req, res, () => {
        res.status(200).json(user);
      })
    }
  })
}

let login = (req, res, next) => {
  passport.authenticate('local', (err, user) => {
    res.json({
      id: user._id,
      name: user.name,
      email: user.email,
      username: user.username
    })
  })(req, res, next)
}

module.exports = {
  register: register,
  login: login
}
