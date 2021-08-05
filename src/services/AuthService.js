import { AxiosResponse } from 'axios';

import $api from '../api';
import instance from '../api/api';

export default class AuthService {
  static login(email, password): Promise<AxiosResponse> {
    return instance.post('/auth/token/obtain/', { email, password });
  }
  static registration(username, email, password): Promise<AxiosResponse> {
    return instance.post('auth/register/', { username, email, password });
  }
  static refresh(refresh): Promise<AxiosResponse> {
    return $api.post('/auth/token/refresh/', { refresh });
  }
}
