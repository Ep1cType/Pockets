import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Root from '../../components/MainComponents/Root/Root';
import { setAuth } from '../../store/auth/authActions';
import { logout } from '../../store/auth/authReducer';

const MainPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(setAuth(true));
    } else {
      history.push('/login');
    }
  }, []);

  const isAuth = useSelector((state) => state.authPage.isAuth);

  const handle = () => {
    dispatch(logout());
    history.push('/login');
  };

  return (
    <>
      {isAuth && (
        <div>
          <span>WELCOME</span>
          <Root handle={handle} />
        </div>
      )}
    </>
  );
};

export default MainPage;
