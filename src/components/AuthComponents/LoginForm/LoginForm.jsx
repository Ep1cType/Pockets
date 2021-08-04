import cn from 'classnames';
import React from 'react';
import { NavLink } from 'react-router-dom';

import FormInput from '../FormInput/FormInput';
import FormSubmit from '../FormSubmit/FormSubmit';

import s from './LoginForm.module.scss';

const LoginForm = ({ handleSubmit, error, email, setEmail, password, setPassword, isLoading }) => {
  let emailClass = cn(s.label, s.label__email);
  let passwordClass = cn(s.label, s.label__password);

  return (
    <form className={s.loginForm} onSubmit={handleSubmit}>
      {error?.detail && <span className={s.loginForm_wrongUser}>{error.detail}</span>}
      <label className={emailClass}>Email</label>
      {error && <span className={s.loginForm_error}>{error.email}</span>}
      <FormInput inputType="email" value={email} setValue={setEmail} />
      <label className={passwordClass}>
        <span>Password</span>
        <NavLink className={s.label__link} to="#">
          Forgot Password?
        </NavLink>
      </label>
      {error && <span className={s.loginForm_error}>{error.password}</span>}
      <FormInput inputType="password" value={password} setValue={setPassword} />
      <FormSubmit value="Login" isLoading={isLoading} />
    </form>
  );
};

export default LoginForm;
