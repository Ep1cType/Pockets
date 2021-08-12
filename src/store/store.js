import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

import authReducer from './auth/authReducer';
import categoriesReducer from './categories/categoriesReducer';
import transactionsReducer from './transactions/transactionsReducer';
import widgetsReducer from './widgets/widgetsReducer';

let reducers = combineReducers({
  authPage: authReducer,
  categoriesPage: categoriesReducer,
  transactionsPage: transactionsReducer,
  widgetsPage: widgetsReducer,
});

let store = createStore(reducers, applyMiddleware(thunk));

export default store;
