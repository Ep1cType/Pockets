import AuthService from '../../services/AuthService';
import UserService from '../../services/UserService';

import { setAuth, setError, setLoading, setRegError, setRegSuccess, setUserInfo } from './authActions';
import {
  SET_AUTH,
  SET_ERROR,
  SET_LOADING,
  SET_REG_ERROR,
  SET_SUCCESS_REG,
  SET_USER_DATA,
  SET_USER_INFO,
} from './authTypes';

let initialState = {
  isAuth: false,
  error: false,
  userInfo: null,
  regError: null,
  accessReg: false,
  isLoading: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA: {
      return {
        ...state,
        ...action.payload,
      };
    }
    case SET_AUTH: {
      return {
        ...state,
        isAuth: action.payload,
      };
    }
    case SET_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }
    case SET_USER_INFO: {
      return {
        ...state,
        userInfo: action.payload,
      };
    }
    case SET_REG_ERROR: {
      return {
        ...state,
        regError: action.payload,
      };
    }
    case SET_SUCCESS_REG: {
      return {
        ...state,
        accessReg: action.payload,
      };
    }
    case SET_LOADING: {
      return {
        ...state,
        isLoading: action.payload,
      };
    }
    default:
      return state;
  }
};

export const signup = (username, email, password, history) => {
  return (dispatch) => {
    dispatch(setRegError(null));
    AuthService.registration(username, email, password)
      .then(() => {
        dispatch(setRegSuccess(true));
        history.push('/login');
      })
      .catch((err) => {
        if (err.response.status === 400) {
          dispatch(setRegError(err.response.data));
        }
      });
  };
};

export const login = (email, password, history) => {
  return (dispatch) => {
    dispatch(setLoading(true));
    dispatch(setError(null));
    dispatch(setRegSuccess(false));
    AuthService.login(email, password)
      .then((response) => {
        localStorage.setItem('token', response.data.access);
        dispatch(setAuth(true));
        dispatch(setError(null));
        history.push('/');
        dispatch(setLoading(false));
      })
      .catch((err) => {
        if (err.response.status === 400) {
          dispatch(setError(err.response.data));
        } else if (err.response.status === 401) {
          dispatch(setError(err.response.data));
        }
        dispatch(setLoading(false));
      });
  };
};

export const checkAuth = (history) => {
  return (dispatch) => {
    dispatch(setLoading(true));
    if (localStorage.getItem('token')) {
      dispatch(setAuth(true));
      dispatch(setLoading(false));
    } else {
      history.push('/login');
      dispatch(setLoading(false));
    }
  };
};

//Testing

export const logout = () => {
  return () => {
    localStorage.removeItem('token');
  };
};

export const getUserInfo = () => {
  return (dispatch) => {
    dispatch(setLoading(true));
    UserService.fetchUsers().then((response) => {
      dispatch(setUserInfo(response.data.username));
      dispatch(setLoading(false));
    });
  };
};

export default authReducer;
