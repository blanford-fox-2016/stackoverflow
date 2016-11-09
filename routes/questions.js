var express = require('express');
var router = express.Router();
var controllerQuestions = require('../controllers/controller.questions')

/* GET users listing. */
router.get('/', controllerQuestions.getAllQuestion); // api/questions / get all data question from database
router.post('/', controllerQuestions.addQuestion); // api/questions / insert data question
router.put('/', controllerQuestions.updateQuestion); // api/questions / update data question
router.delete('/', controllerQuestions.deleteQuestion); // api/questions / delete data question

module.exports = router;
