import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import './MainPage.scss';
import avatar from '../../assets/img/avatar.png';
import Calendar from '../../components/MainComponents/Calendar/Calendar';
import CategoriesTable from '../../components/MainComponents/CategoriesTable/CategoriesTable';
import TransactionTable from '../../components/MainComponents/TransactionTable/TransactionTable';
import WidgetsList from '../../components/MainComponents/WidgetsList/WidgetsList';
import UserService from '../../services/UserService';
import { setAuth, setUserInfo } from '../../store/auth/authActions';

const MainPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const userInfo = useSelector((state) => state.authPage.userInfo);

  useEffect(() => {
    if (localStorage.getItem('access_token')) {
      dispatch(setAuth(true));
      UserService.getUser().then((response) => {
        console.log(response.data);
        dispatch(setUserInfo(response.data.username));
      });
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
            <WidgetsList />
          </div>
          <div className="rightMenu">
            <div className="userInfo">
              <img className="userInfo__img" src={avatar} alt="#" />
              <div className="userInfo__text">Hi, {userInfo}</div>
            </div>
            <Calendar />
          </div>
        </div>
      )}
    </>
  );
};

export default MainPage;
