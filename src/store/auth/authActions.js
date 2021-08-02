import {
  SET_AUTH,
  SET_ERROR,
  SET_LOADING,
  SET_REG_ERROR,
  SET_SUCCESS_REG,
  SET_USER_DATA,
  SET_USER_INFO,
} from './authTypes';

export const setAuthUserData = (username, email, password) => {
  return {
    type: SET_USER_DATA,
    payload: { username, email, password },
  };
};

export const setAuth = (bool) => {
  return {
    type: SET_AUTH,
    payload: bool,
  };
};

export const setError = (error) => {
  return {
    type: SET_ERROR,
    payload: error,
  };
};

export const setRegError = (error) => {
  return {
    type: SET_REG_ERROR,
    payload: error,
  };
};

export const setRegSuccess = (bool) => {
  return {
    type: SET_SUCCESS_REG,
    payload: bool,
  };
};

export const setUserInfo = (userInfo) => {
  return {
    type: SET_USER_INFO,
    payload: userInfo,
  };
};

export const setLoading = (bool) => {
  return {
    type: SET_LOADING,
    payload: bool,
  };
};
