'use strict';

require('babel-register')

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// var routes = require('./routes/index');

import React from 'react'
import { renderToString } from 'react-dom/server'
import ReactCookie from 'react-cookie';

import { Router, match } from 'react-router';
import routes from '../app/containers/routes';

import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';

import promiseMiddleware from '../app/utils/promiseMiddleware';
import combinedReducers from '../app/reducers';

import fetchComponentData from '../app/utils/fetchNeeds';
import instance from '../app/utils/interceptor';

const finalCreateStore = applyMiddleware(promiseMiddleware)( createStore );

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/assets', express.static(path.join(__dirname, '../client/assets')));

// initialize webpack HMR
var webpack = require('webpack')
var config = require('../webpack/webpack.prod')
if (process.env.NODE_ENV === 'development') {
  var config = require('../webpack/webpack.config')
  var webpackDevMiddleware = require('webpack-dev-middleware')
  var webpackHotMiddleware = require('webpack-hot-middleware')
}
else {
  app.use('/static', express.static(path.join(__dirname, '../build')));
}
var compiler = webpack(config)

if (process.env.NODE_ENV === 'development') {
  app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
  app.use(webpackHotMiddleware(compiler))
}

app.use('*', function (req, res, next) {
  console.log('we here1?');
  const store = finalCreateStore(combinedReducers);
  ReactCookie.plugToRequest(req, res);

  match( {routes: routes(store), location: req.url}, ( error, redirectLocation, renderProps ) => {

    if ( error )
      return res.status(500).send( error.message );

    if ( redirectLocation )
      return res.redirect( 302, redirectLocation.pathname + redirectLocation.search );

    if ( renderProps == null ) {
      // return next('err msg: route not found'); // yield control to next middleware to handle the request
      return res.status(404).send( 'Not found' );
    }

    // this is where universal rendering happens,
    // fetchComponentData() will trigger actions listed in static "needs" props in each container component
    // and wait for all of them to complete before continuing rendering the page,
    // hence ensuring all data needed was fetched before proceeding
    //
    // renderProps: contains all necessary data, e.g: routes, router, history, components...
    fetchComponentData( store.dispatch, renderProps.components, renderProps.params)

    .then( () => {
      const initView = renderToString((
        <Provider store={store}>
          <Router {...renderProps} />
        </Provider>
      ))
      let state = JSON.stringify( store.getState() );
      return res.render('index', {
        initView: initView,
        initialState: state
      });
    })

    .then( page => res.status(200).send(page) )

    .catch( err => res.end(err.message) );
  });
  // require('./routes/index')(req, res, next);
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
