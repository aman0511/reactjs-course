import React, { PropTypes } from 'react';
import { Field, reduxForm, SubmissionError } from 'redux-form';

const validate = (values) => {
  const errors = {};
  if (!values.username) {
    errors.username = 'Username/Email Id is required';
  } else if (values.username.length > 60) {
    errors.username = 'Username/EmailId must be 60 characters or less';
  }
  if (!values.password) {
    errors.password = 'Please enter valid password';
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
        {error && <strong className="text-danger">{error}</strong>}
        <div>
          <label htmlFor="username">Username</label>
          <Field name="username" component="input" type="text" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <Field name="password" component="input" type="password" />
        </div>
        <div className="text-center">
          <button
            type="submit"
            disabled={submitting}
            className="btn btn-accent mt-10"
          >
            {submitting ? 'Signing In' : 'Sign In'}
          </button>
        </div>
      </form>
    </section>
  );
};

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
  login: PropTypes.func.isRequired,
  error: PropTypes,
};

export default reduxForm({
  form: 'LoginForm',
  validate,
})(LoginForm);
