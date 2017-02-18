import React from 'react';
import bindActionCreators from 'redux/lib/bindActionCreators';
import connect from 'react-redux/lib/components/connect';

import * as UserActions from 'actions/accounts/user.actions';
import { getProfile, getFullName } from 'selectors/accounts/user.selector';

import Sidenav from 'components/layout/Sidenav';
import Header from 'components/layout/Header';
import routesMapping from '../routesMapping';

class SideNavLayout extends React.Component {

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
    return (
      <div>
        <Header
          profile={profile}
          profileFullName={profileFullName}
        />
        <div className="row">
          <div className="small-4 columns">
            <Sidenav
              profile={profile}
              profileFullName={profileFullName}
              routesMapping={routesMapping}
            />
          </div>
          <div className="small-8 columns">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }

}

SideNavLayout.propTypes = {
  profile: React.PropTypes.instanceOf(Object),
  profileFullName: React.PropTypes.string,
  children: React.PropTypes.instanceOf(Object),
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
)(SideNavLayout);
