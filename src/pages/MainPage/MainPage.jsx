import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import './MainPage.scss';
import CategoriesTable from '../../components/MainComponents/CategoriesTable/CategoriesTable';
import TransactionTable from '../../components/MainComponents/TransactionTable/TransactionTable';
import { setAuth } from '../../store/auth/authActions';

const MainPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (localStorage.getItem('access_token')) {
      dispatch(setAuth(true));
    } else {
      history.push('/login');
    }
  }, []);

  const isAuth = useSelector((state) => state.authPage.isAuth);

  return (
    <>
      {isAuth && (
        <div className="mainPage">
          <div className="leftMenu">
            <div className="logo">
              <span className="logo__text">Pockets</span>
            </div>
            <div className="tables">
              <TransactionTable />
              <CategoriesTable />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MainPage;
