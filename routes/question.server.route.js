'use strict'

const express = require('express');
const router = express.Router();

const QuestionController = require('../controllers/question.server.controller')

/* GET All Users */
router.get('/questions', QuestionController.list)

/* POST new user. */
router.post('/questions', QuestionController.create)

/* PUT User by his/ her username*/
router.put('/questions/:question_id', QuestionController.update)

/* DELETE User by his/ her username*/
router.delete('/questions/:question_id', QuestionController.delete)

/* GET User by his/ her username*/
router.get('/questions/:question_id', QuestionController.find)






module.exports = router;
