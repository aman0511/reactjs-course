import React from 'react';
import Route from 'react-router/lib/Route';
import IndexRoute from 'react-router/lib/IndexRoute';

import * as UserActions from 'actions/accounts/user.actions';

if (typeof require.ensure !== 'function') require.ensure = function (d, c) { c(require); };

/* eslint-disable */
const accountsRoutes = require('./accounts/routes').default;
const dashboardRoutes = require('./dashboard/routes').default;

export default (store) => {
  const requireAuth = (nextState, replace, cb) => {
    const { accounts: { user: { profile } } } = store.getState();
    if (!profile) {
      store.dispatch(UserActions.getUserProfile())
        .then(
          () => {
            const user = store.getState().accounts.user.profile;
            if (!user) replace('/');
            const isAllowed = user.states.filter(item => item.url === nextState.location.pathname);
            if (!isAllowed.length) replace(user.states[0].url);
            cb();
          },
          () => {
            replace('/');
            cb();
          },
        );
    } else {
      cb();
    }
  };

  return (
    <Route
      path="/"
      getComponent={(nextState, cb) => require.ensure(
        [], () => cb(null, require('./App').default),
      )}
    >
      <IndexRoute
        name="home"
        getComponent={(nextState, cb) => require.ensure(
          [], () => cb(null, require('./Home').default),
        )}
      />
      <Route
        childRoutes={accountsRoutes}
      />
      <Route
        path='/dashboard'
        name="dashboard"
        onEnter={requireAuth}
        childRoutes={dashboardRoutes}
      />
      <Route
        path="*"
        getComponent={(nextState, cb) => require.ensure(
          [], () => cb(null, require('./NotFound').default),
        )}
      />
    </Route>
  );
};
/* eslint-enable */
