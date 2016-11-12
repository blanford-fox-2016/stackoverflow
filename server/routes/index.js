var express = require('express');
var router = express.Router();
const User = require('../controller/controller.user');
const passport = require('passport');
/* GET home page. */
router.get('/', User.home);

module.exports = router;
