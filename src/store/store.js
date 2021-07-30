import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

import authReducer from '../reducers/authReducer';

let reducers = combineReducers({
  authPage: authReducer,
});

let store = createStore(reducers, applyMiddleware(thunk));

export default store;
