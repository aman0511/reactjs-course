import React from 'react';
import { Route, IndexRoute } from 'react-router';

import * as AuthActions from 'actions/accounts/auth.actions';

import App from 'containers/App';
import Home from 'containers/Home';

import Login from 'containers/accounts/Login';
import ForgotPassword from 'containers/accounts/ForgotPassword';
import Dashboard from 'containers/dashboard/Dashboard';

import NotFound from 'containers/NotFound';

export default (store) => {
  const isAuthenticated = (nextState, replace, cb) => {
    const { accounts: { auth: { profile } } } = store.getState();
    if (!profile) {
      store.dispatch(AuthActions.getUserProfile())
        .then(
          () => {
            const user = store.getState().accounts.auth.profile;
            if (!user) replace('/');
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
    <Route path="/" component={App}>
      <IndexRoute
        name="home"
        component={Home}
      />
      <Route
        name="login"
        path="/login"
        component={Login}
      />
      <Route
        name="forgot-password"
        path="/forgot-password"
        component={ForgotPassword}
      />
      <Route onEnter={isAuthenticated}>
        <Route
          name="dashboard"
          path="/dashboard"
          component={Dashboard}
        />
      </Route>
      <Route path="*" component={NotFound} />
    </Route>
  );
};
