'use strict'
const express = require('express');
const router = express.Router();
const user = require('../controllers/apiUsersController');

/* GET users listing. */
router.get('/', user.getAll);
router.get('/:username', user.getOneByUsername);
router.put('/:id', user.updateById);
router.delete('/:id', user.deleteById);

module.exports = router;
