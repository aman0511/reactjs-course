import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import * as UserActions from 'actions/accounts/user.actions';
import ForgotPasswordForm from 'components/accounts/forgotPassword/ForgotPasswordForm';

class ForgotPassword extends React.Component {
  constructor(props) {
    super(props);
    this.forgotPassword = this.forgotPassword.bind(this);
  }

  forgotPassword(data) {
    return this.props.UserActions.forgotPassword(data);
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
  UserActions: React.PropTypes.instanceOf(Object),
};

const mapDispatchToProps = dispatch => ({
  UserActions: bindActionCreators(UserActions, dispatch),
});

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ForgotPassword);
