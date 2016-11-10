const express = require('express');
const router = express.Router();
const view_controller = require('../controller/view.controller');

/* GET home page. */
router.get('/', view_controller.homePage)
router.get('/register', view_controller.registerForm)
router.get('/login', view_controller.loginForm)

module.exports = router;
