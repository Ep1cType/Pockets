import { SET_AUTH, SET_USER_INFO } from './authTypes';

export const setAuth = (bool) => {
  return {
    type: SET_AUTH,
    payload: bool,
  };
};

export const setUserInfo = (userInfo) => {
  return {
    type: SET_USER_INFO,
    payload: userInfo,
  };
};
