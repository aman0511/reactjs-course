var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/whoami', (req, res) => {
  res.send("You are a winner");
});

router.get('/*', function(req, res, next) {
  var hostname = req.headers.host.split(":")[0];
  if (hostname == 'localhost') {
    res.render('index', { title: 'T2B', hostname: hostname });
  } else if (hostname == 'employer.localhost'){
    res.render('index', { title: 'w', hostname: hostname });
  }
});

module.exports = router;
