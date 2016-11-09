var express = require('express');
var router = express.Router();
var controllerQuestions = require('../controllers/controller.questions')

/* GET users listing. */
router.get('/', controllerQuestions.getAllQuestion); // api/questions / get all data question from database
router.post('/', controllerQuestions.addQuestion); // api/questions / insert data question
module.exports = router;
