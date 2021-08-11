import { ADD_TRANSACTION, DELETE_TRANSACTION, EDIT_TRANSACTION, SET_TRANSACTIONS } from './transactionsTypes';

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
    case DELETE_TRANSACTION: {
      return {
        ...state,
        transactionsList: state.transactionsList.filter((el) => el.id !== action.payload),
      };
    }
    case ADD_TRANSACTION: {
      return {
        ...state,
        transactionsList: [action.payload, ...state.transactionsList],
      };
    }
    case EDIT_TRANSACTION: {
      return {
        ...state,
        transactionsList: state.transactionsList.map((el) => (el.id === action.payload.id ? action.payload : el)),
      };
    }
    default:
      return state;
  }
};

export default transactionsReducer;
