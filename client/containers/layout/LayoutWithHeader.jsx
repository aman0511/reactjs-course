import React from 'react';
import { Switch } from 'react-router-dom';
import bindActionCreators from 'redux/lib/bindActionCreators';
import connect from 'react-redux/lib/connect/connect';

import { getProfile, getFullName } from 'selectors/accounts/user.selector';
import * as UserActions from 'actions/accounts/user.actions';

import Home from 'containers/Home';
import Accounts from 'containers/accounts/Routes';
import NoMatch from 'containers/NoMatch';
import Header from 'components/layout/Header';
import MatchAlways from './MatchAlways';
import MatchWhenUnAuthorized from './MatchWhenUnAuthorized';


class LayoutWithHeader extends React.Component {

  componentWillMount() {
    console.log('Welcome to main Route');
    this.logout = this.logout.bind(this);
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
      <Switch>
        <MatchWhenUnAuthorized path="/accounts" component={Accounts} />
        <MatchAlways path="/" exact component={Home} />
        <MatchAlways component={NoMatch} />
      </Switch>
    </section>);
  }
}

LayoutWithHeader.propTypes = {
  profile: React.PropTypes.instanceOf(Object),
  profileFullName: React.PropTypes.string,
  UserActions: React.PropTypes.instanceOf(Object).isRequired,
};

LayoutWithHeader.defaultProps = {
  profile: {},
  profileFullName: '',
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
)(LayoutWithHeader);
