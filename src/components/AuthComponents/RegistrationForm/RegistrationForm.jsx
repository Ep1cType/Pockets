import cnBind from 'classnames/bind';
import React from 'react';

import FormInput from '../FormInput/FormInput';
import FormSubmit from '../FormSubmit/FormSubmit';

import s from './RegistrationForm.module.scss';

const cx = cnBind.bind(s);

const RegistrationForm = ({
  handleSubmit,
  regError,
  username,
  email,
  password,
  check,
  setUsername,
  setEmail,
  setPassword,
  setCheck,
  isLoading,
}) => {
  let emailClass = cx({
    label: true,
    label__email: true,
  });
  let passwordClass = cx({
    label: true,
    label__password: true,
  });
  let usernameClass = cx({
    label: true,
    label__username: true,
  });
  let checkboxClass = cx({
    registrationForm_input: true,
  });

  return (
    <form className={s.registrationForm} onSubmit={handleSubmit}>
      <label className={usernameClass}>Username</label>
      {regError ? <span className={s.registrationForm_input__error}>{regError.username}</span> : null}
      <FormInput inputType="username" value={username} setValue={setUsername} />
      <label className={emailClass}>Email</label>
      {regError ? <span className={s.registrationForm_input__error}>{regError.email}</span> : null}
      <FormInput inputType="email" value={email} setValue={setEmail} />
      <label className={passwordClass}>Password</label>
      {regError ? <span className={s.registrationForm_input__error}>{regError.password}</span> : null}
      <FormInput inputType="password" value={password} setValue={setPassword} />
      <div className={checkboxClass}>
        <FormInput inputType="checkbox" value={check} setValue={setCheck} />
        <label>Я со всем согласен отпутите</label>
      </div>
      <FormSubmit value="Sign Up" isLoading={isLoading} />
    </form>
  );
};

export default RegistrationForm;
