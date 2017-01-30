import React from 'react';
import Helmet from 'react-helmet';
import bindActionCreators from 'redux/lib/bindActionCreators';
import connect from 'react-redux/lib/components/connect';

import * as UserActions from 'actions/accounts/user.actions';
import Sidenav from 'components/layout/Sidenav';
import { DASHBOARD } from '../seo';

const Dashboard = props => (
  <div>
    <Helmet title={DASHBOARD.title} meta={DASHBOARD.meta} />
    <h3>Welcome to Dashboard.</h3>
    <Sidenav user={props.user} />
  </div>
);

const mapStateToProps = state => ({
  user: state.accounts.user,
});

const mapDispatchToProps = dispatch => ({
  UserActions: bindActionCreators(UserActions, dispatch),
});

Dashboard.propTypes = {
  user: React.PropTypes.instanceOf(Object),
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dashboard);
