import axios from 'axios';

import AuthService from '../services/AuthService';

const $api = axios.create({
  baseURL: 'http://89.108.102.170/api/',
});

$api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('access_token')}`;
  return config;
});

$api.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && error.config && !error.config._isRetry) {
      originalRequest._isRetry = true;
      AuthService.refresh(localStorage.getItem('refresh_token'))
        .then((response) => {
          localStorage.setItem('access_token', response.data.access);
          localStorage.setItem('refresh_token', response.data.refresh);
          return $api.request(originalRequest);
        })
        .catch((err) => {
          localStorage.clear();
          window.location = '/login';
        });
    }
    throw error;
  }
);

export default $api;
