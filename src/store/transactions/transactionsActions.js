import { ADD_TRANSACTION, DELETE_TRANSACTION, EDIT_TRANSACTION, SET_TRANSACTIONS } from './transactionsTypes';

export const setTransactionsList = (transactions) => {
  return {
    type: SET_TRANSACTIONS,
    payload: transactions,
  };
};

export const deleteTransaction = (id) => {
  return {
    type: DELETE_TRANSACTION,
    payload: id,
  };
};

export const addTransaction = (transaction) => {
  return {
    type: ADD_TRANSACTION,
    payload: transaction,
  };
};

export const editTransaction = (newTransaction) => {
  return {
    type: EDIT_TRANSACTION,
    payload: newTransaction,
  };
};
