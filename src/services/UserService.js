import { AxiosResponse } from 'axios';

import $api from '../http';

export default class UserService {
  static fetchUsers(): Promise<AxiosResponse> {
    return $api.get('/users/me/');
  }
}
