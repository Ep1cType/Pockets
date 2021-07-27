import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import { PATHS } from '../constants';
import { Preview } from '../views';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact={true} path={PATHS.root} component={Preview} />

        <Redirect to={PATHS.root} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
