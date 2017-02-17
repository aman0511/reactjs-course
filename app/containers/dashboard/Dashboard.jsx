import React from 'react';
import Helmet from 'react-helmet';
import bindActionCreators from 'redux/lib/bindActionCreators';
import connect from 'react-redux/lib/components/connect';

import * as UserActions from 'actions/accounts/user.actions';
import { getProfile, getFullName } from 'selectors/accounts/user.selector';
import Sidenav from 'components/layout/Sidenav';
import { DASHBOARD } from '../seo';


class Dashboard extends React.Component {

  constructor(props) {
    super(props);
    this.goTo = this.goTo.bind(this);
  }

  goTo() {
    console.log(this);
    console.log('go to somewhere');
  }

  render() {
    const { profile, profileFullName } = this.props;
    if (profile.is_backoffice_profile) {
      return (
        <div>
          <Helmet title={DASHBOARD.title} meta={DASHBOARD.meta} />
          <h3>Welcome to Dashboard.</h3>
          <Sidenav
            profile={profile}
            profileFullName={profileFullName}
          />
        </div>
      );
    }
    return (
      <div>
        <Helmet title={DASHBOARD.title} meta={DASHBOARD.meta} />
        <h3>Welcome to Consumer.</h3>
      </div>
    );
  }

}

Dashboard.propTypes = {
  profile: React.PropTypes.instanceOf(Object),
  profileFullName: React.PropTypes.string,
};

const mapStateToProps = state => ({
  profile: getProfile(state),
  profileFullName: getFullName(state),
});

const mapDispatchToProps = dispatch => ({
  UserActions: bindActionCreators(UserActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dashboard);
