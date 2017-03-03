import React from 'react';
import { Switch } from 'react-router-dom';
import connect from 'react-redux/lib/connect/connect';

import { getProfile, getFullName } from 'selectors/accounts/user.selector';

import Dashboard from 'containers/dashboard/Routes';
import SideNav from 'components/layout/Sidenav';
import Header from 'components/layout/Header';
import MatchWhenAuthorized from './MatchWhenAuthorized';


class LayoutWithSideNav extends React.Component {

  componentWillMount() {
    console.log('Welcome to main Route');
  }

  render() {
    const { profile, profileFullName } = this.props;
    return (<section>
      <Header
        profile={profile}
        profileFullName={profileFullName}
      />
      <SideNav
        profile={profile}
        profileFullName={profileFullName}
      />
      <Switch>
        <MatchWhenAuthorized path="/dashboard" component={Dashboard} />
      </Switch>
    </section>);
  }
}

LayoutWithSideNav.propTypes = {
  profile: React.PropTypes.instanceOf(Object),
  profileFullName: React.PropTypes.string,
};

LayoutWithSideNav.defaultProps = {
  profile: {},
  profileFullName: '',
};

const mapStateToProps = state => ({
  profile: getProfile(state),
  profileFullName: getFullName(state),
});

const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LayoutWithSideNav);
