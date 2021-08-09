import $api from '../api';

export default class TransactionService {
  static getTransactions(offset) {
    return $api.get(`/pockets/transactions/?limit=20&offset=${offset}`);
  }
}
