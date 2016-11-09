var express = require('express');
var router = express.Router();

const controller = require('../controllers/controller.api.questions')

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// questions
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
/* Process New question. */
router.post('/', controller.addQuestion);

/* Show a question. */
router.get('/:questid', controller.showQuestion);

/* Process Edit a question. */
router.put('/:questid', controller.editQuestion);

/* Process Delete a question. */
router.delete('/:questid', controller.deleteQuestion);

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// comments
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
/* Process New comment. */
router.post('/:questid/comments/', controller.addComment);

/* Process Edit a comment. */
router.put('/:questid/comments/:commentid', controller.editComment);

/* Process Delete a comment. */
router.delete('/:questid/comments/:commentid', controller.deleteComment);

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// votes
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
/* Process New vote. */
router.post('/:questid/comments/', controller.addVote);

/* Process Delete a vote. */
router.delete('/:questid/comments/:commentid', controller.deleteVote);

module.exports = router;
