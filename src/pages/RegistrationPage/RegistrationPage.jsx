import React, { useState } from 'react';

import FormFooter from '../../components/AuthComponents/FormFooter/FormFooter';
import FormText from '../../components/AuthComponents/FormText/FormText';
import Logo from '../../components/AuthComponents/Logo/Logo';
import RegistrationForm from '../../components/AuthComponents/RegistrationForm/RegistrationForm';
import { LOGIN_ROUTE } from '../../constants/consts';
import AuthService from '../../services/AuthService';

import s from './RegistrationPage.module.scss';

const RegistrationPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [check, setCheck] = useState(false);
  const [error, setError] = useState(null);
  const [successfulReg, setSuccessfulReg] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    AuthService.registration(username, email, password)
      .then(() => {
        setError(null);
        setSuccessfulReg(true);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.response.data);
        setIsLoading(false);
      });
  };

  return (
    <div className={s.registrationPage}>
      <div className={s.registration}>
        <div className={s.registration__content}>
          <Logo />
          <FormText title="Adventure starts here" subtitle="Make your app management easy and fun!" />
          <RegistrationForm
            handleSubmit={handleSubmit}
            regError={error}
            username={username}
            email={email}
            password={password}
            check={check}
            setUsername={setUsername}
            setEmail={setEmail}
            setPassword={setPassword}
            setCheck={setCheck}
            isLoading={isLoading}
            successfulReg={successfulReg}
          />
          <FormFooter footerText="Already have an account ?" footerTextLink="Sign in instead" route={LOGIN_ROUTE} />
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
