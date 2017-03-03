import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render } from 'react-dom';

import App from './containers/App';
import configureStore from './utils/configureStore';

/* eslint-disable */
const store = configureStore(window.__PRELOADED_STATE__);
/* eslint-enable */

render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root'),
);

if (module.hot) {
  module.hot.accept('./containers/App', () => {
    /* eslint-disable */
    const AppComponent = require('./containers/App.jsx').default;
    /* eslint-enable */
    render(
      <Router>
        <Provider store={store}>
          <AppComponent />
        </Provider>
      </Router>,
      document.getElementById('root'),
    );
  });
}
