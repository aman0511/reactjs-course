import React from 'react';
import Route from 'react-router/lib/Route';

if (typeof require.ensure !== 'function') require.ensure = function (d, c) { c(require); };

/*eslint-disable*/
const routes = (
  <Route>
    <Route
      path="login"
      getComponent={(nextState, cb) => require.ensure(
        [], () => cb(null, require('./Login').default),
      )}
    />
    <Route
      path="register"
      getComponent={(nextState, cb) => require.ensure(
        [], () => cb(null, require('./Register').default),
      )}
    />
    <Route
      path="forgot-password"
      getComponent={(nextState, cb) => require.ensure(
        [], () => cb(null, require('./ForgotPassword').default),
      )}
    />
  </Route>
);
/*eslint-enable*/

export default routes;
