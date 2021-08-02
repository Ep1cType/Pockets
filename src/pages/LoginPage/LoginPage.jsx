import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import FormFooter from '../../components/AuthComponents/FormFooter/FormFooter';
import FormText from '../../components/AuthComponents/FormText/FormText';
import LoginForm from '../../components/AuthComponents/LoginForm/LoginForm';
import Logo from '../../components/AuthComponents/Logo/Logo';
import { REGISTRATION_ROUTE } from '../../constants/consts';
import { setRegError } from '../../store/auth/authActions';
import { login } from '../../store/auth/authReducer';

import s from './LoginPage.module.scss';

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const error = useSelector((state) => state.authPage.error);
  const accessReg = useSelector((state) => state.authPage.accessReg);
  const isLoading = useSelector((state) => state.authPage.isLoading);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    dispatch(setRegError(null));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(email, password, history));
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
            accessReg={accessReg}
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
