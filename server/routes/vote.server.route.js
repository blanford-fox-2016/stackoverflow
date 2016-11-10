'use strict'

const express = require('express');
const router = express.Router();

const VoteController = require('../controllers/vote.server.controller')


/* POST new comment. */
router.post('/questions/:question_id/votes', VoteController.create)

/* DELETE User by his/ her username*/
router.delete('/questions/:question_id/votes', VoteController.delete)



module.exports = router;
