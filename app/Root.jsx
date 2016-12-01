// Root component for Application
import React from 'react';
import Router from 'react-router/lib/Router';
import browserHistory from 'react-router/lib/browserHistory';
import Provider from 'react-redux/lib/components/Provider';
// <Provider> magically make the store available to all container
// components in the application without passing it explicitly
import { syncHistoryWithStore } from 'react-router-redux';
import routes from 'routes/routing';

function Root(props) {
  const { store } = props;
  // Create an enhanced history that syncs navigation events with the store
  const history = syncHistoryWithStore(browserHistory, store);
  return (
    <Provider store={store}>
      <Router history={history} routes={routes(store)} />
    </Provider>
  );
}

Root.propTypes = {
  store: React.PropTypes,
};

export default Root;
