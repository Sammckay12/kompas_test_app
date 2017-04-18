var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/kompas_test_app');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/users', function(req, res, next) {
  res.render('index', { title: 'users route' });
});

router.get('/places', function(req, res, next) {
  res.render('index', { title: 'places route' });
});

router.post('/users', function(req, res, next) {
  res.render('index', { title: 'users route' });
});

router.post('/places', function(req, res, next) {
  res.render('index', { title: 'places route' });
});




module.exports = router;
