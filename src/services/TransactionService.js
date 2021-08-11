import $api from '../api';

export default class TransactionService {
  static getTransactions(offset) {
    return $api.get(`/pockets/transactions/?limit=20&offset=${offset}`);
  }
  static postTransaction(category, transaction_date, amount) {
    return $api.post('/pockets/transactions/', { category, transaction_date, amount });
  }
  static deleteTransaction(transaction_id) {
    return $api.delete(`/pockets/transactions/${transaction_id}`);
  }
  static editTransaction(transaction_id, newTransaction) {
    return $api.patch(`/pockets/transactions/${transaction_id}/`, newTransaction);
  }
}
