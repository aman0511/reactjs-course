import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import * as AuthActions from 'actions/accounts/auth.actions';
import ForgotPasswordForm from 'components/accounts/ForgotPasswordForm';

class ForgotPassword extends React.Component {
  constructor(props) {
    super(props);
    this.forgotPassword = this.forgotPassword.bind(this);
  }

  forgotPassword(data) {
    return this.props.AuthActions.forgotPassword(data);
  }

  render() {
    return (
      <section>
        <h3>Forgot Password</h3>
        <ForgotPasswordForm forgotPassword={this.forgotPassword} />
        <div>
          Go Back to <Link to="/login">login</Link>?
        </div>
      </section>
    );
  }
}

ForgotPassword.propTypes = {
  AuthActions: React.PropTypes,
};

const mapDispatchToProps = dispatch => ({
  AuthActions: bindActionCreators(AuthActions, dispatch),
});

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ForgotPassword);
