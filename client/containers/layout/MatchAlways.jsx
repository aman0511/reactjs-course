import React, { PropTypes } from 'react';
import { Route } from 'react-router-dom';
import bindActionCreators from 'redux/lib/bindActionCreators';
import connect from 'react-redux/lib/connect/connect';

import * as UserActions from 'actions/accounts/user.actions';


class MatchAlways extends React.Component {

  componentWillMount() {
    this.props.UserActions.getUserProfile().catch(
        () => console.log('Profile failed'));
  }

  render() {
    const { component: Component, ...rest } = this.props;

    return (
      <Route
        {...rest}
        render={
          renderProps => <Component {...renderProps} />
        }
      />
    );
  }
}

MatchAlways.propTypes = {
  component: PropTypes.instanceOf(Object).isRequired,
  UserActions: React.PropTypes.instanceOf(Object).isRequired,
};

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  UserActions: bindActionCreators(UserActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MatchAlways);
