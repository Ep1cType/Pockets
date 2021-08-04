import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getUserInfo } from '../../../store/auth/authReducer';

const Root = ({ handle }) => {
  const dispatch = useDispatch();

  const userInfo = useSelector((state) => state.authPage.userInfo);

  useEffect(() => {
    dispatch(getUserInfo());
  }, []);

  return (
    <div>
      <span>Welcome {userInfo}</span>
      <button onClick={() => handle()}>LOGOUT</button>
    </div>
  );
};

export default Root;
