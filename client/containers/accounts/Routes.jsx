import React, { PropTypes } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Login from './Login';
import Register from './Register';
import ForgotPassword from './ForgotPassword';

class Accounts extends React.Component {

  componentWillMount() {
    console.log('Welcome to Accounts Route');
  }

  render() {
    const match = this.props.match;
    return (
      <section>
        <Switch>
          <Route
            exact
            path={`${match.url}`}
            render={() => <Redirect to={`${match.url}/login`} />}
          />
          <Route
            path={`${match.url}/login`}
            component={Login}
          />
          <Route
            path={`${match.url}/register`}
            component={Register}
          />
          <Route
            path={`${match.url}/forgot-password`}
            component={ForgotPassword}
          />
        </Switch>
      </section>
    );
  }
}

Accounts.propTypes = {
  match: PropTypes.instanceOf(Object).isRequired,
};

export default Accounts;
