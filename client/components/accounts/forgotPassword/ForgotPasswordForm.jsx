import React, { PropTypes } from 'react';
import { Field, reduxForm, SubmissionError } from 'redux-form';

import { ButtonLoader } from 'components/core/Loaders';
import style from './style.css';

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
    <section className={style.formContainer}>
      <form onSubmit={handleSubmit(submit)}>
        {error && <strong>{error}</strong>}
        <div>
          <label htmlFor="email">Email</label>
          <Field name="email" component="input" type="text" />
        </div>
        <div className="text-center">
          <button type="submit" disabled={submitting} className="hollow button">
            {submitting ?
              <span><ButtonLoader active /> Sending </span> :
              'Send'
            }
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
  error: PropTypes.string,
};

ForgotPasswordForm.defaultProps = {
  error: '',
};

export default reduxForm({
  form: 'ForgotPasswordForm',
  validate,
})(ForgotPasswordForm);
