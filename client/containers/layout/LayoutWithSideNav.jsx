import React from 'react';
import { Switch } from 'react-router-dom';
import connect from 'react-redux/lib/connect/connect';
import bindActionCreators from 'redux/lib/bindActionCreators';

import { getProfile, getFullName } from 'selectors/accounts/user.selector';
import * as UserActions from 'actions/accounts/user.actions';

import Dashboard from 'containers/dashboard/Routes';
import SideNav from 'components/layout/Sidenav';
import Header from 'components/layout/Header';
import MatchWhenAuthorized from './MatchWhenAuthorized';


class LayoutWithSideNav extends React.Component {

  componentWillMount() {
    console.log('Welcome to main Route');
    this.logout = this.logout.bind(this);
    this.goTo = this.goTo.bind(this);
  }

  goTo(path) {
    this.context.router.push(path);
  }

  logout(data) {
    return this.props.UserActions.logout(data)
      .then(() => {
        this.props.UserActions.resetState();
        this.goTo('/');
      })
      .catch(() => {
        this.props.UserActions.resetState();
        this.goTo('/');
      });
  }

  render() {
    const { profile, profileFullName } = this.props;
    return (<section>
      <Header
        profile={profile}
        profileFullName={profileFullName}
        logout={this.logout}
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
  UserActions: React.PropTypes.instanceOf(Object).isRequired,
};

LayoutWithSideNav.defaultProps = {
  profile: {},
  profileFullName: '',
};

LayoutWithSideNav.contextTypes = {
  router: React.PropTypes.object.isRequired,
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
)(LayoutWithSideNav);
