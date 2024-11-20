var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Paradise Island' });
});
/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Paradise Island' });
});

module.exports = router;
