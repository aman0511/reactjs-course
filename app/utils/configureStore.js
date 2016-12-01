import { createStore, applyMiddleware, compose } from 'redux';

import createLogger from 'redux-logger';
import browserHistory from 'react-router/lib/browserHistory';
import { routerMiddleware } from 'react-router-redux';

import combinedReducers from 'reducers';
import DevTools from 'containers/DevTools';
import promiseMiddleware from './PromiseMiddleware';

const logger = createLogger({
  level: 'info',
  collapsed: true,
});

const enhancer = compose(
  // Middleware you want to use in development:
  applyMiddleware(
    routerMiddleware(browserHistory),
    promiseMiddleware,
    logger,
  ),
  // Required! Enable Redux DevTools with the monitors you chose
  DevTools.instrument(),
);

export default function configureStore(initialState = undefined) {
  const store = createStore(combinedReducers, initialState, enhancer);
  return store;
}
