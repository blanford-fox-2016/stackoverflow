var express = require('express');
var router = express.Router();
const questionController = require('../controllers/controller.api.question')

router.get('/seed', questionController.seedQuestion)
router.get('/', questionController.getQuestion)
router.get('/:questionId', questionController.getQuestionByQuestionId)
router.post('/', questionController.addQuestion)
router.delete('/', questionController.deleteAllQuestion)
router.delete('/:questionId', questionController.deleteQuestionByQuestionId)
router.put('/:questonId', questionController.updateQuestion)

module.exports = router;
