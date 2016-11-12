'use strict'

const express = require('express');
const mongoose = require('mongoose');
const User = require('../models/models.user');
const passport = require('passport');


//==================
// home ===========
//=================

let home = (req,res) => {

  res.render( 'index', { user : req.user })

}

//===================
// registration
//===================

let registerPage = (req,res) => {
    res.render ('register' , {})
}

let register = (req,res) => {
  User.register(
    new User({
      firstname : req.body.firstname,
      username  : req.body.username,
      email     : req.body.username
  }) , req.body.password , (err,user) => {

    if (err) {
      return res.render('register', { user : user })
    }

    passport.authenticate('local')(req, res, () => {
        res.redirect('/');

      });
  });
}

//============
// log in ===
//==========

let logInPage = (req, res) => {
  res.render( 'login', { user:req.user })
}

let logIn = (req , res) => {

  res.redirect('/')

}

//=================
// logOut =========
//================

let logOut = (req, res) => {

  req.logout();
  res.redirect('/')

}

module.exports = ({

  home : home,
  logOut : logOut,
  logInPage : logInPage,
  logIn :logIn ,
  registerPage : registerPage,
  register : register

})
