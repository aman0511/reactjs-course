import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import * as AuthActions from 'actions/accounts/auth.actions';
import RegisterForm from 'components/accounts/RegisterForm';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.register = this.register.bind(this);
  }

  register(data) {
    return this.props.AuthActions.register(data)
      .then(
        () => browserHistory.push('/master-data/country/list'),
        error => console.log('error', error),
      );
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
  AuthActions: bindActionCreators(AuthActions, dispatch),
});

Register.propTypes = {
  AuthActions: React.PropTypes,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Register);
