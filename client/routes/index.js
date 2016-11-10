var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/auth', (req, res, next) => {
  res.render('auth', {title: 'Sign In or Register'})
})
router.get('/question/:slug', (req, res, next) => {
  res.render('question', {title: 'Question Detail', slug: req.params.slug})
})

module.exports = router;
