import React from 'react';
import { Switch } from 'react-router-dom';
import connect from 'react-redux/lib/connect/connect';

import { getProfile, getFullName } from 'selectors/accounts/user.selector';

import Home from 'containers/Home';
import Accounts from 'containers/accounts/Routes';
import NoMatch from 'containers/NoMatch';
import Header from 'components/layout/Header';
import MatchAlways from './MatchAlways';
import MatchWhenUnAuthorized from './MatchWhenUnAuthorized';


class LayoutWithHeader extends React.Component {

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
};

LayoutWithHeader.defaultProps = {
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
)(LayoutWithHeader);
