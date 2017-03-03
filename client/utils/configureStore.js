import { createStore, applyMiddleware, compose } from 'redux';

import createLogger from 'redux-logger';

import combinedReducers from 'reducers';
import DevTools from 'containers/DevTools';
import promiseMiddleware from './promiseMiddleware';

const logger = createLogger({
  level: 'info',
  collapsed: true,
});

const enhancer = compose(
  // Middleware you want to use in development:
  applyMiddleware(
    promiseMiddleware,
    logger,
  ),
  // Required! Enable Redux DevTools with the monitors you chose
  DevTools.instrument(),
);

export default preloadedState => createStore(
  combinedReducers,
  preloadedState,
  enhancer,
);
