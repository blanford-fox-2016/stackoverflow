'use strict'

const express = require('express')
const router = express.Router()

const questionController = require('../controllers/controller.api.questions')

//Show All Question (GET All Question)
router.get('/', questionController.showAllQuestion);

//Create New Question (POST New Question)
router.post('/', questionController.createQuestion);

//Show a Question (GET Question)
router.get('/:questionID', questionController.showQuestion);

//Edit a Question (PUT a Modified Question)
router.put('/:questionID', questionController.editQuestion);

//delete a question (DELETE a Question)
router.delete('/:questionID', questionController.deleteQuestion);


module.exports =router;
