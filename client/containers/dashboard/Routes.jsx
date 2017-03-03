import React, { PropTypes } from 'react';
import { Route, Switch } from 'react-router-dom';

import BackOfficeDashboard from './BackOfficeDashboard';


class Dashboard extends React.Component {

  componentWillMount() {
    console.log('Welcome to Dashboard Route');
  }

  render() {
    const match = this.props.match;
    return (
      <div>
        Hello from Dashboard
        <Switch>
          <Route
            exact
            path={`${match.url}`}
            component={BackOfficeDashboard}
          />
        </Switch>
      </div>
    );
  }
}

Dashboard.propTypes = {
  match: PropTypes.instanceOf(Object).isRequired,
};

export default Dashboard;
