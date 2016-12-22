var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/whoami', (req, res) => {
  res.send("You are a winner");
});

router.get('/*', function(req, res, next) {
  var hostname = req.headers.host.split(":")[0];
  res.sendFile(path.join(__dirname, './../../build/index.html'));
});

module.exports = router;
