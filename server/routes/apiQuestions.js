'use strict'
const express = require('express');
const router = express.Router();
const question = require('../controllers/apiQuestionsController');

/* GET users listing. */
router.get('/', question.getAll);
router.post('/', question.addNew)
router.get('/:slug', question.getOneBySlug);
router.put('/:id', question.updateById);
router.delete('/:id', question.deleteById);


module.exports = router;
