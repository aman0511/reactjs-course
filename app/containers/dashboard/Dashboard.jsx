import React from 'react';
import Helmet from 'react-helmet';
import bindActionCreators from 'redux/lib/bindActionCreators';
import connect from 'react-redux/lib/components/connect';

import * as UserActions from 'actions/accounts/user.actions';
import { getProfile, getFullName } from 'selectors/accounts/user.selector';
import Sidenav from 'components/layout/Sidenav';
import { DASHBOARD } from '../seo';


const Dashboard = props => (
  <div>
    <Helmet title={DASHBOARD.title} meta={DASHBOARD.meta} />
    <h3>Welcome to Dashboard.</h3>
    <Sidenav profile={props.getProfile} fullName={props.getFullName} />
  </div>
);

const mapStateToProps = state => ({
  getProfile: getProfile(state),
  getFullName: getFullName(state),
});

const mapDispatchToProps = dispatch => ({
  UserActions: bindActionCreators(UserActions, dispatch),
});

Dashboard.propTypes = {
  getProfile: React.PropTypes.instanceOf(Object),
  getFullName: React.PropTypes.string,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dashboard);
