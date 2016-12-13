import React from 'react';
import { Route, IndexRoute } from 'react-router';

import * as UserActions from 'actions/accounts/user.actions';

import App from 'containers/App';
import Home from 'containers/Home';

import Login from 'containers/accounts/Login';
import Register from 'containers/accounts/Register';
import ForgotPassword from 'containers/accounts/ForgotPassword';

import Dashboard from 'containers/dashboard/Dashboard';

import NotFound from 'containers/NotFound';

export default (store) => {
  const requireAuth = (nextState, replace, cb) => {
    const { accounts: { user: { profile } } } = store.getState();
    if (!profile) {
      store.dispatch(UserActions.getUserProfile())
        .then(
          () => {
            const user = store.getState().accounts.user.profile;
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
        path="login"
        component={Login}
      />
      <Route
        name="register"
        path="register"
        component={Register}
      />
      <Route
        name="forgot-password"
        path="forgot-password"
        component={ForgotPassword}
      />
      <Route onEnter={requireAuth}>
        <Route
          name="dashboard"
          path="dashboard"
          component={Dashboard}
        />
      </Route>
      <Route path="*" component={NotFound} />
    </Route>
  );
};
