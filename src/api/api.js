import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://89.108.102.170/api/',
});

export const AuthAPI = {
  registration(username, email, password) {
    return instance.post('auth/register/', { username, email, password }).then((response) => {
      return response.data;
    });
  },
  login(email, password) {
    return instance.post('/auth/token/obtain/', { email, password }).then((response) => {
      return response.data;
    });
  },
};
