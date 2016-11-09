'use strict'

const express = require('express');
const router = express.Router();

const QuestController = require('../controllers/question.server.controller')

/* GET All Users */
router.get('/questions', QuestController.list)

/* POST new user. */
router.post('/questions', QuestController.create)

/* PUT User by his/ her username*/
router.put('/questions/:quest_id', QuestController.update)

/* DELETE User by his/ her username*/
router.delete('/questions/:quest_id', QuestController.delete)

/* GET User by his/ her username*/
router.get('/questions/:quest_id', QuestController.find)






module.exports = router;
