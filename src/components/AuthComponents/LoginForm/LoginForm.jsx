import React from 'react';
import { NavLink } from 'react-router-dom';

import FormInput from '../FormInput/FormInput';
import FormSubmit from '../FormSubmit/FormSubmit';

import s from './LoginForm.module.scss';

const LoginForm = ({ handleSubmit, error, accessReg, email, setEmail, password, setPassword, isLoading }) => {
  return (
    <form className={s.form} onSubmit={handleSubmit}>
      {error?.detail ? <span className={s.login_form_inputs__error}>{error.detail}</span> : null}
      {accessReg && <span className={s.login_form_inputs__success}>Account Created ! Login:</span>}
      <label>Email</label>
      {error ? <span className={s.form__error}>{error.email}</span> : null}
      <FormInput inputType="email" value={email} setValue={setEmail} />
      <label>
        <span>Password</span>
        <NavLink className={s.form__link} to="#">
          Forgot Password?
        </NavLink>
      </label>
      {error ? <span className={s.form__error}>{error.password}</span> : null}
      <FormInput inputType="password" value={password} setValue={setPassword} />
      <FormSubmit value="Login" isLoading={isLoading} />
    </form>
  );
};

export default LoginForm;
