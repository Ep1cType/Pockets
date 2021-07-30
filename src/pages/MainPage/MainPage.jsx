import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { checkAuth, getUserInfo, logout, setLoading } from '../../reducers/authReducer';

const MainPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    debugger;
    dispatch(checkAuth(history));
  }, []);

  const isAuth = useSelector((state) => state.authPage.isAuth);

  const handle = () => {
    debugger;
    dispatch(logout());
    history.push('/login');
  };
  //
  // if (isLoading) {
  //   return <span>LOADINNNNNGGGGG</span>;
  // }

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

const Root = ({ handle }) => {
  const dispatch = useDispatch();

  const userInfo = useSelector((state) => state.authPage.userInfo);
  const isLoading = useSelector((state) => state.authPage.isLoading);

  useEffect(() => {
    dispatch(getUserInfo());
  }, []);

  return (
    <div>
      {isLoading ? <span>LOADING</span> : <span>Welcome {userInfo}</span>}
      <button onClick={() => handle()}>LOGOUT</button>
    </div>
  );
};

export default MainPage;
