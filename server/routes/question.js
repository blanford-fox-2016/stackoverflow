var express = require('express');
var router = express.Router();
const questionController = require('../controllers/controller.api.question')

router.get('/seed', questionController.seedQuestion)
router.get('/', questionController.getQuestion)
router.get('/:questionId', questionController.getQuestionByQuestionId)
router.post('/', questionController.addQuestion)
router.delete('/', questionController.deleteAllQuestion)
router.delete('/:questionId', questionController.deleteQuestionByQuestionId)
router.put('/:questionId', questionController.updateQuestion)
router.put('/vote/:questionId', questionController.addVoteQuestion)
router.put('/answer/:questionId', questionController.addAnswer)
router.put('/answer/vote/:questionId', questionController.voteAnswer)

module.exports = router;
