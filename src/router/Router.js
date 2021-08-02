import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import { publicRoutes } from '../constants';
import { MAIN_ROUTE } from '../constants/consts';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        {publicRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} component={Component} exact />
        ))}
        <Redirect to={MAIN_ROUTE} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
