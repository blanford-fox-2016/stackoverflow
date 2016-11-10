'use strict'

const express = require('express');
const router = express.Router();
const User = require('../controller/controller.user');
const passport = require('passport');
/*
GET user page.
login user
register
update
delete user
*/
//=============
// profile =====
//=============
router.get('/', User.home);
//===========
// log in ==
//==========
router.post('/login', passport.authenticate('local'), User.logIn);

router.get('/login', User.logInPage);

//================
// registration ==
//===============

router.get('/register', User.registerPage);

router.post('/register', User.register);

//===============
// log out ======
//===============

router.get('/logout', User.logOut);
//
// router.put('/:id', User.update);
//
// router.delete('/:id', User.deleteUser);

module.exports = router ;
