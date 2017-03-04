import React, { PropTypes } from 'react';
import { Field, reduxForm, SubmissionError } from 'redux-form';

const validate = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = 'Enter Email';
  } else if (values.email.length > 60) {
    errors.email = 'Email Id must be 60 characters or less';
  }
  if (!values.password) {
    errors.password = 'Enter password';
  }
  return errors;
};

const LoginForm = (props) => {
  const { handleSubmit, submitting, login, error } = props;

  const submit = data => login(data)
    .catch((err) => {
      const errobj = {
        _error: err.non_field_errors,
        ...err,
      };
      throw new SubmissionError(errobj);
    });

  return (
    <section>
      <form onSubmit={handleSubmit(submit)}>
        {error && <strong>{error}</strong>}
        <div>
          <label htmlFor="email">Email</label>
          <Field name="email" component="input" type="text" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <Field name="password" component="input" type="password" />
        </div>
        <div className="text-center">
          <button
            type="submit"
            data-balloon="Click to Login"
            data-balloon-pos="up"
            className="hollow button"
            disabled={submitting}
          >
            {submitting ? 'Signing In' : 'Sign In'}
          </button>
        </div>
      </form>
    </section>
  );
};

LoginForm.propTypes = {
  handleSubmit: PropTypes.instanceOf(Function).isRequired,
  submitting: PropTypes.bool.isRequired,
  login: PropTypes.instanceOf(Function).isRequired,
  error: PropTypes.string,
};

LoginForm.defaultProps = {
  error: '',
};

export default reduxForm({
  form: 'LoginForm',
  validate,
})(LoginForm);
