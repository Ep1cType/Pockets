import $api from '../api';
import instance from '../api/api';

export default class AuthService {
  static login(email, password) {
    return instance.post('/auth/token/obtain/', { email, password });
  }
  static registration(username, email, password) {
    return instance.post('auth/register/', { username, email, password });
  }
  static refresh(refresh) {
    return $api.post('/auth/token/refresh/', { refresh });
  }
}
