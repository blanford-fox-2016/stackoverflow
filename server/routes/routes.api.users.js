var express = require('express');
var router = express.Router();

const controller = require('../controllers/controller.api.users')

/* GET All Users. */
router.get('/', controller.allUsers)

/* Process Register Local User. */
router.post('/', controller.registerLocalUser);

/* Process Login User. */
router.post('/login', controller.loginUser);

/* Process Edit a User. */
router.put('/:id', controller.editUser);

/* Process Delete a User. */
router.delete('/:id', controller.deleteUser);

module.exports = router;
