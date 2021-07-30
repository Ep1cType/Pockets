import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import FormFooter from '../../components/AuthComponents/FormFooter/FormFooter';
import FormText from '../../components/AuthComponents/FormText/FormText';
import Logo from '../../components/AuthComponents/Logo/Logo';
import RegistrationForm from '../../components/AuthComponents/RegistrationForm/RegistrationForm';
import { LOGIN_ROUTE } from '../../constants/consts';
import { setError, signup } from '../../reducers/authReducer';

import s from './RegistrationPage.module.scss';

const RegistrationPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const regError = useSelector((state) => state.authPage.regError);
  const isLoading = useSelector((state) => state.authPage.isLoading);

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [check, setCheck] = useState(false);

  useEffect(() => {
    dispatch(setError(null));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signup(username, email, password, history));
  };

  return (
    <div className={s.registration_wrapper}>
      <div className={s.registration_form}>
        <Logo />
        <FormText title="Adventure starts here" subtitle="Make your app management easy and fun!" />
        <RegistrationForm
          handleSubmit={handleSubmit}
          regError={regError}
          username={username}
          email={email}
          password={password}
          check={check}
          setUsername={setUsername}
          setEmail={setEmail}
          setPassword={setPassword}
          setCheck={setCheck}
          isLoading={isLoading}
        />
        <FormFooter footerText="Already have an account ?" footerTextLink="Sign in instead" route={LOGIN_ROUTE} />
      </div>
    </div>
  );
};

export default RegistrationPage;
