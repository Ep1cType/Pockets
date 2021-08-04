import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import FormFooter from '../../components/AuthComponents/FormFooter/FormFooter';
import FormText from '../../components/AuthComponents/FormText/FormText';
import LoginForm from '../../components/AuthComponents/LoginForm/LoginForm';
import Logo from '../../components/AuthComponents/Logo/Logo';
import { REGISTRATION_ROUTE } from '../../constants/consts';
import AuthService from '../../services/AuthService';
import { setAuth } from '../../store/auth/authActions';

import s from './LoginPage.module.scss';

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    AuthService.login(email, password)
      .then((response) => {
        localStorage.setItem('token', response.data.access);
        dispatch(setAuth(true));
        setError(null);
        history.push('/');
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.response.data);
        setIsLoading(false);
      });
  };

  return (
    <div className={s.loginPage}>
      <div className={s.login}>
        <div className={s.login__content}>
          <Logo />
          <FormText title="Welcome to Pockets! 👋🏻" subtitle="Please sign-in to your account and start the adventure" />
          <LoginForm
            handleSubmit={handleSubmit}
            error={error}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            isLoading={isLoading}
          />
          <FormFooter footerText="New on our platform?" footerTextLink="Create an account" route={REGISTRATION_ROUTE} />
        </div>
      </div>
    </div>
  );
};

export default Login;
