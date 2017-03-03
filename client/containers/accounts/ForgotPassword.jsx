import React from 'react';
import bindActionCreators from 'redux/lib/bindActionCreators';
import connect from 'react-redux/lib/connect/connect';
import Link from 'react-router-dom/Link';

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
          Go Back to <Link to="/accounts/login">login</Link>?
        </div>
      </section>
    );
  }
}

ForgotPassword.propTypes = {
  UserActions: React.PropTypes.instanceOf(Object).isRequired,
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
