import LoginPage from '../pages/LoginPage/LoginPage';
import MainPage from '../pages/MainPage/MainPage';
import RegistrationPage from '../pages/RegistrationPage/RegistrationPage';

import { LOGIN_ROUTE, MAIN_ROUTE, REGISTRATION_ROUTE } from './consts';

// Роуты для страниц
export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    Component: LoginPage,
  },
  {
    path: REGISTRATION_ROUTE,
    Component: RegistrationPage,
  },
  {
    path: MAIN_ROUTE,
    Component: MainPage,
  },
];

export const authRoutes = [
  {
    path: MAIN_ROUTE,
    Component: MainPage,
  },
];
