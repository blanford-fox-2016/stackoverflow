var express = require('express');
var router = express.Router();

const controller = require('../controllers/controller.api.questions')

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// questions
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

/* Show All Questions. */
router.get('/', controller.showAllQuestion);

/* Process New Question. */
router.post('/', controller.addQuestion);

/* Process Seeding Question. */
router.post('/seed', controller.seedQuestion);

/* Process Delete All Questions. */
router.delete('/seed', controller.deleteAllQuestion);

/* Show a Question. */
router.get('/:questid', controller.showQuestion);

/* Process Edit a Question. */
router.put('/:questid', controller.editQuestion);

/* Process Delete a Question. */
router.delete('/:questid', controller.deleteQuestion);

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// comments
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// /* Process New comment. */
// router.post('/:questid/comments/', controller.addComment);
//
// /* Process Edit a comment. */
// router.put('/:questid/comments/:commentid', controller.editComment);
//
// /* Process Delete a comment. */
// router.delete('/:questid/comments/:commentid', controller.deleteComment);
//
// // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// // votes
// // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// /* Process New vote. */
// router.post('/:questid/comments/', controller.addVote);
//
// /* Process Delete a vote. */
// router.delete('/:questid/comments/:commentid', controller.deleteVote);

module.exports = router;
