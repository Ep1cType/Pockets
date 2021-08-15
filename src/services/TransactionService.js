import $api from '../api';

export default class TransactionService {
  static getTransactions(offset, start_date = '1970-01-01', end_date = '2500-01-01') {
    return $api.get(`/pockets/transactions/?limit=20&offset=${offset}&start_date=${start_date}&end_date=${end_date}`);
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
