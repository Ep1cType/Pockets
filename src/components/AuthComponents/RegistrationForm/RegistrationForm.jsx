import cn from 'classnames';
import React from 'react';

import FormInput from '../FormInput/FormInput';
import FormSubmit from '../FormSubmit/FormSubmit';

import s from './RegistrationForm.module.scss';

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
  let emailClass = cn(s.label, s.label__email);
  let passwordClass = cn(s.label, s.label__password);
  let usernameClass = cn(s.label, s.label__username);
  let checkboxClass = cn(s.registrationForm_input);

  return (
    <form className={s.registrationForm} onSubmit={handleSubmit}>
      <label className={usernameClass}>Username</label>
      {regError ? <span className={s.registrationForm_error__input}>{regError.username}</span> : null}
      <FormInput inputType="username" value={username} setValue={setUsername} />
      <label className={emailClass}>Email</label>
      {regError ? <span className={s.registrationForm_error__input}>{regError.email}</span> : null}
      <FormInput inputType="email" value={email} setValue={setEmail} />
      <label className={passwordClass}>Password</label>
      {regError ? <span className={s.registrationForm_error__input}>{regError.password}</span> : null}
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
