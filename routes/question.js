'use strict'

const express = require('express');
const router = express.Router();
const Question = require('../controller/controller.question');

/* GET home page. */

router.get('/',Question.showAll);

router.put('/:id',Question.update);

router.post('/',Question.create);

router.delete('/:id',Question.deleteQuestion);

module.exports = router ;
