import $api from '../api';

export default class UserService {
  static getUser() {
    return $api.get('/users/me/');
  }
}
