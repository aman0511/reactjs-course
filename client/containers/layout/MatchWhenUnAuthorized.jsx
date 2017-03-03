import React, { PropTypes } from 'react';
import { Route, Redirect } from 'react-router-dom';
import bindActionCreators from 'redux/lib/bindActionCreators';
import connect from 'react-redux/lib/connect/connect';

import * as UserActions from 'actions/accounts/user.actions';
import { getProfile } from 'selectors/accounts/user.selector';


class MatchWhenUnAuthorized extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    };
  }

  componentWillMount() {
    if (!this.props.profile) {
      this.props.UserActions.getUserProfile().then(
        () => this.setState({ isLoading: false })).catch(
        () => this.setState({ isLoading: false }));
    }
  }

  render() {
    const { component: Component, profile, ...rest } = this.props;
    const { isLoading } = this.state;

    if (isLoading) {
      return <div>Loading</div>;
    }
    console.log(profile);
    return (
      <Route
        {...rest}
        render={
          (renderProps) => {
            if (profile) {
              return (<Redirect
                to={{
                  pathname: '/',
                }}
              />);
            }
            return <Component {...renderProps} />;
          }
        }
      />
    );
  }
}

MatchWhenUnAuthorized.propTypes = {
  component: PropTypes.instanceOf(Object).isRequired,
  profile: React.PropTypes.instanceOf(Object),
  UserActions: React.PropTypes.instanceOf(Object).isRequired,
};

MatchWhenUnAuthorized.defaultProps = {
  profile: {},
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
)(MatchWhenUnAuthorized);
