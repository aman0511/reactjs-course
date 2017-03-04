import React from 'react';
import bindActionCreators from 'redux/lib/bindActionCreators';
import connect from 'react-redux/lib/connect/connect';

import * as UserActions from 'actions/accounts/user.actions';
import RegisterForm from 'components/accounts/register/RegisterForm';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.register = this.register.bind(this);
    this.goTo = this.goTo.bind(this);
  }

  goTo(path) {
    this.context.router.transitionTo(path);
  }

  register(data) {
    return this.props.UserActions.register(data)
      .then(() => this.goTo('/dashboard'));
  }

  render() {
    return (
      <div className="row">
        <div className="small-8 large-offset-2 columns">
          <h2>Welcome to Register.</h2>
          <RegisterForm register={this.register} />
        </div>
      </div>
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
  UserActions: React.PropTypes.instanceOf(Object).isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Register);
