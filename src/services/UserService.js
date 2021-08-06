import $api from '../api';

export default class UserService {
  static fetchUsers() {
    return $api.get('/users/me/');
  }
}
