import React from 'react';
import bindActionCreators from 'redux/lib/bindActionCreators';
import connect from 'react-redux/lib/components/connect';
import browserHistory from 'react-router/lib/browserHistory';

import * as UserActions from 'actions/accounts/user.actions';
import RegisterForm from 'components/accounts/register/RegisterForm';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.register = this.register.bind(this);
  }

  register(data) {
    return this.props.UserActions.register(data)
      .then(() => browserHistory.push('/dashboard'));
  }

  render() {
    return (
      <section>
        <h2>Welcome to Register.</h2>
        <RegisterForm register={this.register} />
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

Register.propTypes = {
  UserActions: React.PropTypes.instanceOf(Object),
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Register);
