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
      try {
        const response = await AuthService.refresh(localStorage.getItem('refresh_token'));
        localStorage.setItem('access_token', response.data.access);
        localStorage.setItem('refresh_token', response.data.refresh);
        return $api.request(originalRequest);
      } catch (e) {
        console.log('UNAUTORIZE');
      }
    }
    throw error;
  }
);

export default $api;
