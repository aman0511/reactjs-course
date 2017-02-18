import React from 'react';
import Route from 'react-router/lib/Route';
import IndexRoute from 'react-router/lib/IndexRoute';

import * as UserActions from 'actions/accounts/user.actions';

if (typeof require.ensure !== 'function') require.ensure = function (d, c) { c(require); };

/* eslint-disable */
const accountsRoutes = require('./accounts/routes').default;
const addressRoutes = require('./address/routes').default;

export default (store) => {
  const requireAuth = (nextState, replace, cb) => {
    const { accounts: { user: { profile } } } = store.getState();
    if (!profile) {
      store.dispatch(UserActions.getUserProfile())
        .then(
          () => {
            const user = store.getState().accounts.user.profile;
            if (!user) replace({ pathname: '/login', query: { next: nextState.location.pathname } });
            const isAllowed = user.access_control.indexOf(nextState.routes[nextState.routes.length-1].name);
            if (isAllowed < 0) replace({ pathname: '/dashboard'});
            cb();
          },
          () => {
            replace({ pathname: '/login', query: { next: nextState.location.pathname } });
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
        name='sidenav_layout'
        getComponent={(nextState, cb) => require.ensure(
          [], () => cb(null, require('./layout/SideNavLayout').default),
        )}
      >
        <Route
          path='/dashboard'
          name='dashboard'
          onEnter={requireAuth}
          getComponent={(nextState, cb) => require.ensure(
            [], () => cb(null, require('./dashboard/Dashboard').default),
          )}
        />
        <Route
          path='/address'
          name='address'
          onEnter={requireAuth}
          childRoutes={addressRoutes}
        />
      </Route>
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
