var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/auth', (req, res, next) => {
  res.render('auth', {title: 'Sign In or Register'})
})
router.get('/question', (req, res, next) => {
  res.render('question', {title: 'Sign In or Register'})
})

module.exports = router;
