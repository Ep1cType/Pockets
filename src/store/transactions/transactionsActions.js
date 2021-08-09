import { SET_TRANSACTIONS } from './transactionsTypes';

export const setTransactionsList = (transactions) => {
  return {
    type: SET_TRANSACTIONS,
    payload: transactions,
  };
};
