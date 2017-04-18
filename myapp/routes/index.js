var express = require('express');
var router = express.Router();

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

// Import the native MongoDB driver
const Mongo = require('mongodb')
// Import Winston for async logging
const Winston = require('winston')
// The MongoClient class provides an interface for connecting to a // MondoDB database
const MongoClient = Mongo.MongoClient

// Url of your MongoDB database. Substitute with your own
const dbURI = 'mongodb://localhost:27017/kompas_test_app'
// Call the client comment method and provide a callback to report // connection results
MongoClient.connect(dbURI, (err, db) => {
  // If the connection failed, report the error and return
  if (err)
    return Winston.error(`Unable to connect to server: ${err}`)

  // The connection worked, let's log that too
  Winston.info(`Connected to MongoDB database at ${dbURI}`)

  // This is where we'll do our work against the db

  // When we're done, make sure to close the connection
  db.close()
})


module.exports = router;
