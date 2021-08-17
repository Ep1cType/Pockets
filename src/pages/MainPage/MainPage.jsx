import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import avatar from '../../assets/img/avatar.png';
import Calendar from '../../components/MainComponents/Calendar/Calendar';
import CategoriesTable from '../../components/MainComponents/CategoriesTable/CategoriesTable';
import Loader from '../../components/MainComponents/Loader/Loader';
import TransactionTable from '../../components/MainComponents/TransactionTable/TransactionTable';
import WidgetsList from '../../components/MainComponents/WidgetsList/WidgetsList';
import UserService from '../../services/UserService';
import { setAuth, setUserInfo } from '../../store/auth/authActions';

import s from './MainPage.module.scss';

const MainPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const userInfo = useSelector((state) => state.authPage.userInfo);

  const [choiceOption, setChoiceOption] = useState('all');
  const [isLoading, setIsLoading] = useState(false);
  const [startDate, setStartDate] = useState('1970-01-01');
  const [endDate, setEndDate] = useState('2500-01-01');
  const [offset, setOffset] = useState(0);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    if (localStorage.getItem('access_token')) {
      dispatch(setAuth(true));
      setIsLoading(true);
      UserService.getUser().then((response) => {
        dispatch(setUserInfo(response.data.username));
        setIsLoading(false);
      });
    } else {
      history.push('/login');
      setIsLoading(false);
    }
  }, []);

  const isAuth = useSelector((state) => state.authPage.isAuth);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      {isAuth && (
        <div className={s.mainPage}>
          <div className={s.leftMenu}>
            <div className={s.logo}>
              <span className={s.logo__text}>Pockets</span>
            </div>
            <div className={s.tables}>
              <TransactionTable
                offset={offset}
                setOffset={setOffset}
                fetching={fetching}
                setFetching={setFetching}
                startDate={startDate}
                endDate={endDate}
                choiceOption={choiceOption}
              />
              <CategoriesTable
                startDate={startDate}
                endDate={endDate}
                choiceOption={choiceOption}
                fetching={fetching}
              />
            </div>
            <WidgetsList />
          </div>
          <div className={s.rightMenu}>
            <div className={s.userInfo}>
              <img className={s.userInfo__img} src={avatar} alt="#" />
              <div className={s.userInfo__text}>Hi, {userInfo}</div>
            </div>
            <Calendar
              choiceOption={choiceOption}
              setChoiceOption={setChoiceOption}
              setStartDate={setStartDate}
              setEndDate={setEndDate}
              setOffset={setOffset}
              setFetching={setFetching}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default MainPage;
