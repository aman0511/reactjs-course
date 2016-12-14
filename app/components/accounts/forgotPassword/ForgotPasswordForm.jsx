import React, { PropTypes } from 'react';
import { Field, reduxForm, SubmissionError } from 'redux-form';

const validate = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = 'Enter Email';
  }
  return errors;
};

const ForgotPasswordForm = (props) => {
  const { handleSubmit, submitting, forgotPassword, error } = props;

  const submit = data => forgotPassword(data)
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
          <button type="submit" disabled={submitting}>
            {submitting ? 'Sending' : 'Send'}
          </button>
        </div>
      </form>
    </section>
  );
};

ForgotPasswordForm.propTypes = {
  handleSubmit: PropTypes.instanceOf(Function).isRequired,
  submitting: PropTypes.bool.isRequired,
  forgotPassword: PropTypes.instanceOf(Function).isRequired,
  error: PropTypes.instanceOf(Object),
};

export default reduxForm({
  form: 'ForgotPasswordForm',
  validate,
})(ForgotPasswordForm);
