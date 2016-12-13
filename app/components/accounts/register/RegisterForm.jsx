import React, { PropTypes } from 'react';
import { Field, reduxForm, SubmissionError } from 'redux-form';

const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = 'Enter name';
  }
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

const RegisterForm = (props) => {
  const { handleSubmit, submitting, register, error } = props;

  const submit = data => register(data)
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
          <label htmlFor="name">Name</label>
          <Field name="name" component="input" type="text" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <Field name="email" component="input" type="text" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <Field name="password" component="input" type="password" />
        </div>
        <div className="text-center">
          <button type="submit" disabled={submitting}>
            {submitting ? 'Signing In' : 'Sign In'}
          </button>
        </div>
      </form>
    </section>
  );
};

RegisterForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
  register: PropTypes.func.isRequired,
  error: PropTypes,
};

export default reduxForm({
  form: 'RegisterForm',
  validate,
})(RegisterForm);
