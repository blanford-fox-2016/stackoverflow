'use strict'

const express = require('express')
const router = express.Router()

const userController = require('../controllers/controller.api.users')

//Show All Question (GET All Question)
router.get('/', userController.showAllUsers);

//Create New Question (POST New Question)
router.post('/', userController.createUser);

//Show a Question (GET Question)
router.get('/:userID', userController.showUser);

//Edit a Question (PUT a Modified Question)
router.put('/:userID', userController.editUser);

//delete a question (DELETE a Question)
router.delete('/:userID', userController.deleteUser);


module.exports =router;
