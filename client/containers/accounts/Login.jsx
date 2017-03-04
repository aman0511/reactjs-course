import React from 'react';
import bindActionCreators from 'redux/lib/bindActionCreators';
import connect from 'react-redux/lib/connect/connect';
import { Link, Redirect } from 'react-router-dom';

import * as UserActions from 'actions/accounts/user.actions';
import LoginForm from 'components/accounts/login/LoginForm';


class Login extends React.Component {

  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.goTo = this.goTo.bind(this);
    this.state = {
      redirectToReferrer: false,
    };
  }

  goTo(path) {
    console.log(this.context);
    this.context.router.push(path);
  }

  login(data) {
    return this.props.UserActions.login(data)
      .then(() => {
        this.setState({ redirectToReferrer: true });
      });
  }

  render() {
    const { from } = this.props.location.state || '/';
    const { redirectToReferrer } = this.state;

    return (
      <div className="row">
        <div className="small-8 large-offset-2 columns">
          {redirectToReferrer && (
            <Redirect to={from || '/dashboard'} />
          )}
          {from && (
            <p>You must log in to view the page at {from.pathname}</p>
          )}
          <h2>Welcome to Login.</h2>
          <LoginForm login={this.login} />
          <Link to="/accounts/forgot-password">Forgot Password?</Link>
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

Login.propTypes = {
  UserActions: React.PropTypes.instanceOf(Object).isRequired,
  location: React.PropTypes.instanceOf(Object).isRequired,
};

Login.contextTypes = {
  router: React.PropTypes.object.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
