import React, { PropTypes } from 'react';
import { Route, Redirect } from 'react-router-dom';
import bindActionCreators from 'redux/lib/bindActionCreators';
import connect from 'react-redux/lib/connect/connect';

import FullScreenLoader from 'components/core/Loaders';
import * as UserActions from 'actions/accounts/user.actions';
import { getProfile } from 'selectors/accounts/user.selector';


class MatchWhenAuthorized extends React.Component {

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
    } else {
      this.setState({ isLoading: false });
    }
  }

  render() {
    const { component: Component, profile, ...rest } = this.props;
    const { isLoading } = this.state;

    if (isLoading) {
      return <FullScreenLoader active />;
    }

    return (
      <Route
        {...rest}
        render={
          (renderProps) => {
            if (profile) {
              return <Component {...renderProps} />;
            }
            return (<Redirect
              to={{
                pathname: 'accounts/login',
                state: { from: renderProps.location },
              }}
            />);
          }
        }
      />
    );
  }
}

MatchWhenAuthorized.propTypes = {
  component: PropTypes.instanceOf(Object).isRequired,
  profile: React.PropTypes.instanceOf(Object),
  UserActions: React.PropTypes.instanceOf(Object).isRequired,
};

MatchWhenAuthorized.defaultProps = {
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
)(MatchWhenAuthorized);
