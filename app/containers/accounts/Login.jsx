import React from 'react';
import bindActionCreators from 'redux/lib/bindActionCreators';
import connect from 'react-redux/lib/components/connect';
import Link from 'react-router/lib/Link';
import browserHistory from 'react-router/lib/browserHistory';

import * as UserActions from 'actions/accounts/user.actions';
import LoginForm from 'components/accounts/login/LoginForm';

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
  }

  login(data) {
    return this.props.UserActions.login(data)
      .then(
        () => browserHistory.push('/dashboard'),
        error => console.log('error', error),
      );
  }

  render() {
    return (
      <section>
        <h2>Welcome to Login.</h2>
        <LoginForm login={this.login} />
        <Link to="/forgot-password">Forgot Password?</Link>
      </section>
    );
  }

}

const mapStateToProps = state => ({
  accounts: state.accounts,
});

const mapDispatchToProps = dispatch => ({
  UserActions: bindActionCreators(UserActions, dispatch),
});

Login.propTypes = {
  UserActions: React.PropTypes.instanceOf(Object),
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
