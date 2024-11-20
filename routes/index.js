var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/index', function(req, res, next) {
  res.render('index', { title: 'Paradise Island' });
});
/* GET about page. */
router.get('/menu', function(req, res, next) {
  res.render('menu', { title: 'Menu' });
});
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About' });
});
router.get('/galery', function(req, res, next) {
  res.render('galery', { title: 'Gallery of memories' });
});
router.get('/comments', function(req, res, next) {
  res.render('comments', { title: 'Comments' });
});
router.get('/reserv', function(req, res, next) {
  res.render('reserv', { title: 'Seat reservation' });
});
module.exports = router;
