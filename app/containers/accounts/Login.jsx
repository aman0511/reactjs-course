import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { browserHistory, Link } from 'react-router';

import * as AuthActions from 'actions/accounts/auth.actions';
import LoginForm from 'components/accounts/LoginForm';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
  }

  login(data) {
    return this.props.AuthActions.login(data)
      .then(
        () => browserHistory.push('/dashboard'),
        error => console.log('error', error),
      );
  }

  render() {
    return (
      <section>
        <h3>Welcome to Login.</h3>
        <LoginForm login={this.login} />
        <Link to="/forgot-password">Forgot Password?</Link>
      </section>
    );
  }
}

Login.propTypes = {
  AuthActions: React.PropTypes,
};

const mapDispatchToProps = dispatch => ({
  AuthActions: bindActionCreators(AuthActions, dispatch),
});

const mapStateToProps = state => ({
  accounts: state.accounts,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
