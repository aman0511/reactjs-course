import React from 'react';
import Helmet from 'react-helmet';
import bindActionCreators from 'redux/lib/bindActionCreators';
import connect from 'react-redux/lib/components/connect';

import * as UserActions from 'actions/accounts/user.actions';
import { getProfile } from 'selectors/accounts/user.selector';
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
    const { profile } = this.props;
    if (profile.is_backoffice_profile) {
      return (
        <div>
          <Helmet title={DASHBOARD.title} meta={DASHBOARD.meta} />
          <h3>Welcome to Dashboard.</h3>
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
};

const mapStateToProps = state => ({
  profile: getProfile(state),
});

const mapDispatchToProps = dispatch => ({
  UserActions: bindActionCreators(UserActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dashboard);
