import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import { publicRoutes } from '../constants';
import { LOGIN_ROUTE, MAIN_ROUTE } from '../constants/consts';
import { checkAuth, setLoading } from '../reducers/authReducer';

const Router = () => {
  // const dispatch = useDispatch();
  //
  // // const isAuth = useSelector((state) => state.authPage.isAuth);
  // const isAuth = false;
  // const isLoading = useSelector((state) => state.authPage.isLoading);
  //
  // useEffect(() => {
  //   debugger;
  //   dispatch(setLoading(true));
  //   if (localStorage.getItem('token')) {
  //     dispatch(checkAuth());
  //   }
  // }, []);

  // if (isLoading) {
  //   return <span>LOADING</span>;
  // }

  return (
    <BrowserRouter>
      <Switch>
        {publicRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} component={Component} exact />
        ))}
        {/*{isAuth &&*/}
        {/*  authRoutes.map(({ path, Component }) => <Route key={path} path={path} component={Component} exact />)}*/}
        {/*{isAuth ? <Redirect to={MAIN_ROUTE} /> : <Redirect to={LOGIN_ROUTE} />}*/}
        <Redirect to={MAIN_ROUTE} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
