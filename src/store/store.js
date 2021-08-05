import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

import authReducer from './auth/authReducer';
import categoriesReducer from './categories/categoriesReducer';

let reducers = combineReducers({
  authPage: authReducer,
  categoriesPage: categoriesReducer,
});

let store = createStore(reducers, applyMiddleware(thunk));

export default store;
