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
  return (
    <form className={s.form_inputs} onSubmit={handleSubmit}>
      <label>Username</label>
      {regError ? <span>{regError.username}</span> : null}
      <FormInput inputType="username" value={username} setValue={setUsername} />
      <label>Email</label>
      {regError ? <span>{regError.email}</span> : null}
      <FormInput inputType="email" value={email} setValue={setEmail} />
      <label>Password</label>
      {regError ? <span>{regError.password}</span> : null}
      <FormInput inputType="password" value={password} setValue={setPassword} />
      <div className={s.input_checkbox}>
        <FormInput inputType="checkbox" value={check} setValue={setCheck} />
        <label>Я со всем согласен отпутите</label>
      </div>
      <FormSubmit value="Sign Up" isLoading={isLoading} />
    </form>
  );
};

export default RegistrationForm;
