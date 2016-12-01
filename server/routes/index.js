var express = require('express');
var router = express.Router();

import React from 'react';
import { renderToString } from 'react-dom/server';

import { Router, RouterContext, match } from 'react-router';
import routes from '../../app/routes/routing';

import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';

import promiseMiddleware from '../../app/utils/PromiseMiddleware';
import combinedReducers from '../../app/reducers';

const finalCreateStore = applyMiddleware(promiseMiddleware)( createStore );


/* GET home page. */
router.get('/whoami', (req, res) => {
  res.send("You are a winner");
});

router.get('/*', function(req, res, next) {
  var hostname = req.headers.host.split(":")[0];
  if (hostname == 'localhost') {
    res.render('index', { title: 'Employee', hostname: hostname });
  } else if (hostname == 'employer.localhost'){
    res.render('index', { title: 'Employer', hostname: hostname });
  }
});

module.exports = router;
