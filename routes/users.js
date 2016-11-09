var express = require('express');
var router = express.Router();
var controllerUser = require('../controllers/controller.users');


/* GET users listing. */
router.post('/', controllerUser.addNewUser);

module.exports = router;
