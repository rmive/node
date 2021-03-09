var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/cool', function(req, res, next) {
  res.send('You\'re so c2ool');
})

router.get('/:userId/books/:bookId', function(req, res) {
  s = "user id is :" + req.params.userId + ", book id is: " + req.params.bookId;
  res.send(s);
});


module.exports = router;


// mongodb+srv://rmive:<linrirong123>@cluster0.wficr.mongodb.net/local_library?retryWrites=true&w=majority