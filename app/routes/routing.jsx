import React from 'react';
import { Route } from 'react-router';

import App from 'containers/App';

import NotFound from 'containers/NotFound';

export default () => (
  <Route path="/" component={App}>
    <Route path="*" component={NotFound} />
  </Route>
);
