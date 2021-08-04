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
  successfulReg,
}) => {
  let emailClass = cn(s.label, s.label_email);
  let passwordClass = cn(s.label, s.label_password);
  let usernameClass = cn(s.label, s.label_username);

  return (
    <form className={s.registrationForm} onSubmit={handleSubmit}>
      {successfulReg && <span className={s.registrationForm_success}>Registration was successful !</span>}
      <label className={usernameClass}>Username</label>
      {regError && <span className={s.registrationForm_error}>{regError.username}</span>}
      <FormInput inputType="username" value={username} setValue={setUsername} />
      <label className={emailClass}>Email</label>
      {regError && <span className={s.registrationForm_error}>{regError.email}</span>}
      <FormInput inputType="email" value={email} setValue={setEmail} />
      <label className={passwordClass}>Password</label>
      {regError && <span className={s.registrationForm_error}>{regError.password}</span>}
      <FormInput inputType="password" value={password} setValue={setPassword} />
      <div className={s.registrationForm_input}>
        <FormInput inputType="checkbox" value={check} setValue={setCheck} />
        <label className={s.registrationForm_label}>Я со всем согласен отпутите</label>
      </div>
      <FormSubmit value="Sign Up" isLoading={isLoading} />
    </form>
  );
};

export default RegistrationForm;
