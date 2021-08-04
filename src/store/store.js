import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

import authReducer from './auth/authReducer';

let reducers = combineReducers({
  authPage: authReducer,
});

let store = createStore(reducers, applyMiddleware(thunk));

export default store;
