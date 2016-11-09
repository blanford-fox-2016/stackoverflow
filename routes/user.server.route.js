'use strict'

const express = require('express');
const router = express.Router();

const UserController = require('../controllers/user.server.controller')

/* GET All Users */
router.get('/users', UserController.list)

/* POST new user. */
router.post('/users', UserController.create)

/* PUT User by his/ her username*/
router.put('/users/:username', UserController.update)

/* DELETE User by his/ her username*/
router.delete('/users/:username', UserController.delete)

/* GET User by his/ her username*/
router.delete('/users/:username', UserController.find)






module.exports = router;
