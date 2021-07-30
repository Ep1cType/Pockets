import { AuthAPI } from '../api/api';
import UserService from '../services/UserService';

const SET_USER_DATA = 'SET_USER_DATA';
const SET_AUTH = 'SET_AUTH';
const SET_ERROR = 'SET_ERROR';
const SET_REG_ERROR = 'SET_REG_ERROR';
const SET_USER_INFO = 'SET_USER_INFO';
const SET_SUCCESS_REG = 'SET_SUCCESS_REG';
const SET_LOADING = 'SET_LOADING';

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

export const signup = (username, email, password, history) => {
  return (dispatch) => {
    dispatch(setRegError(null));
    AuthAPI.registration(username, email, password)
      .then((response) => {
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
    AuthAPI.login(email, password)
      .then((response) => {
        localStorage.setItem('token', response.access);
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
    debugger;
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
  return (dispatch) => {
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
    debugger;
    // console.log(e);
  };
};

export default authReducer;
