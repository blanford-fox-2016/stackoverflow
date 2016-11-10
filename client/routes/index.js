var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', breadcrumbs: 'first' });
});
router.get('/auth', (req, res, next) => {
  res.render('auth', {title: 'Sign In or Register', breadcrumbs: 'first'})
})
router.get('/question/:slug', (req, res, next) => {
  var inislug = req.params.slug;
  res.render('question', {title: 'Question Detail', slug: req.params.slug, breadcrumbs: 'second', page: 'question'})
})

module.exports = router;
