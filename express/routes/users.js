var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/cool', function(req, res, next) {
  res.send('You\'re so c2ool');


  // connecting to mongodb
  var mongoose = require('mongoose');
  var mongoDB = 'mongodb://127.0.0.1/my_database'
  mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'MongoDB connection error:'));

  // define schemas
  var Schema = mongoose.Schema;
  var SomeModelSchema = new Schema({
    a_string: String,
    a_date: Date
  });

  // create model
  var SomeModel = mongoose.model('SomeModel', SomeModelSchema);

  // create modify documents
  var awesome_instance = new SomeModel({ name: 'awesome'});
  awesome_instance.save(function(err) {
    if (err) return handleError(err);
  })

  SomeModel.create({name: 'alos_awesome'}, function(err, awesome_instace) {
    if (err) return handleErroe(err);
  })

  console.log(awesome_instance.name);

  awesome_instance.name = "New cool name";
  awesome_instance.save(function (err) {
    if (err) return handleError(err);
  });

})


module.exports = router;
