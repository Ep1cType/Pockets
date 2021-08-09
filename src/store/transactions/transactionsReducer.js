import { SET_TRANSACTIONS } from './transactionsTypes';

let initialState = {
  transactionsList: [],
};

const transactionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TRANSACTIONS: {
      return {
        ...state,
        transactionsList: action.payload,
      };
    }
    default:
      return state;
  }
};

export default transactionsReducer;
