const express = require('express');
const router = express.Router();
const passport = require('passport')

const user_controller = require('../controller/user.controller.js');
const question_controller = require('../controller/question.controller.js');
const answer_controller = require('../controller/answer.controller.js');


/* GET users listing. */

router.post('/register', user_controller.registerProcess)
router.post('/login', passport.authenticate('local'), user_controller.loginProcess)

router.get('/user/seed', user_controller.seedUser)
router.get('/user', user_controller.getAllUser)
router.get('/user/:id', user_controller.getUser)
router.put('/user/:id', user_controller.updateUser)
router.delete('/user/:id', user_controller.removeUser)
router.delete('/user', user_controller.removeAllUser)

router.get('/question/seed', question_controller.seedQuestion)
router.get('/question', question_controller.getAllQuestion)
router.get('/question/:id', question_controller.getOneQuestion)
router.post('/question', question_controller.createQuestion)
router.put('/question/:id', question_controller.editQuestion)
router.delete('/question/:id', question_controller.removeQuestion)
router.delete('/question', question_controller.removeAllQuestion)

// router.get('/answer/seed', answer_controller.seedAnswer)
// router.get('/answer', answer_controller.getAllAnswer)
// router.post('/answer', answer_controller.createAnswer)
// router.put('/answer/:id', answer_controller.editAnswer)
// router.delete('/answer/:id', answer_controller.removeAnswer)
// router.delete('/answer', answer_controller.removeAllAnswer)


module.exports = router;
