import cnBind from 'classnames/bind';
import React from 'react';
import { NavLink } from 'react-router-dom';

import FormInput from '../FormInput/FormInput';
import FormSubmit from '../FormSubmit/FormSubmit';

import s from './LoginForm.module.scss';

const cx = cnBind.bind(s);

const LoginForm = ({ handleSubmit, error, accessReg, email, setEmail, password, setPassword, isLoading }) => {
  let emailClass = cx({
    label: true,
    label__email: true,
  });
  let passwordClass = cx({
    label: true,
    label__password: true,
  });

  return (
    <form className={s.loginForm} onSubmit={handleSubmit}>
      {error?.detail ? <span className={s.loginForm_submit__error}>{error.detail}</span> : null}
      {accessReg && <span className={s.loginForm_registration__success}>Account Created ! Login:</span>}
      <label className={emailClass}>Email</label>
      {error ? <span className={s.loginForm_input__error}>{error.email}</span> : null}
      <FormInput inputType="email" value={email} setValue={setEmail} />
      <label className={passwordClass}>
        <span>Password</span>
        <NavLink className={s.label__link} to="#">
          Forgot Password?
        </NavLink>
      </label>
      {error ? <span className={s.loginForm_input__error}>{error.password}</span> : null}
      <FormInput inputType="password" value={password} setValue={setPassword} />
      <FormSubmit value="Login" isLoading={isLoading} />
    </form>
  );
};

export default LoginForm;
