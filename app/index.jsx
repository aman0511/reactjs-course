import React from 'react';
import { render } from 'react-dom';
import AppContainer from 'react-hot-loader/lib/AppContainer';

import configureStore from 'utils/configureStore';
import Root from './Root';

const store = configureStore();

render(
  <AppContainer>
    <Root store={store} />
  </AppContainer>,
  document.getElementById('container'),
);

if (module.hot) {
  module.hot.accept('./Root', () => {
    /*eslint-disable*/
    const RootComponent = require('./Root.jsx').default;
    /*eslint-enable*/
    render(
      <AppContainer>
        <RootComponent store={store} />
      </AppContainer>,
      document.getElementById('container'),
    );
  });
}
