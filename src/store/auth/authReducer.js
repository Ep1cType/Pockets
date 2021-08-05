import AuthService from '../../services/AuthService';
import UserService from '../../services/UserService';

import { setUserInfo } from './authActions';
import { SET_AUTH, SET_USER_INFO } from './authTypes';

let initialState = {
  isAuth: false,
  userInfo: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH: {
      return {
        ...state,
        isAuth: action.payload,
      };
    }
    case SET_USER_INFO: {
      return {
        ...state,
        userInfo: action.payload,
      };
    }
    default:
      return state;
  }
};

//Testing

// export const refreshTokens = () => {
//   return (dispatch) => {
//     AuthService.refresh(localStorage.getItem('refresh_token'))
//       .then((response) => {
//         localStorage.setItem('access_token', response.data.access);
//         localStorage.setItem('refresh_token', response.data.refresh);
//       })
//       .then((err) => {});
//   };
// };

export const logout = () => {
  return () => {
    localStorage.removeItem('access_token');
  };
};

export const getUserInfo = () => {
  return (dispatch) => {
    UserService.fetchUsers().then((response) => {
      dispatch(setUserInfo(response.data.username));
    });
  };
};

export default authReducer;
