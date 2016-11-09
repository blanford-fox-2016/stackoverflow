'use strict'
let express = require('express');
let router = express.Router();

/* GET users listing. */
router.get('/');
router.post('/')
router.get('/:slug');
router.put('/:id');
router.delete('/:id');


module.exports = router;
