'use strict'

const express = require('express');
const router = express.Router();

const CommentController = require('../controllers/comment.server.controller')

/* GET All Comments */
router.get('/questions/:question_id/comments', CommentController.list)

/* POST new comment. */
router.post('/questions/:question_id/comments', CommentController.create)

/* PUT User by his/ her username*/
router.put('/questions/:question_id/comments/comment_id', CommentController.update)

/* DELETE User by his/ her username*/
router.delete('/questions/:question_id/comments/comment_id', CommentController.delete)

/* GET User by his/ her username*/
router.get('/questions/:question_id/comments/comment_id', CommentController.find)



module.exports = router;
