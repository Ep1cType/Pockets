import axios from 'axios';

const $api = axios.create({
  baseURL: 'http://89.108.102.170/api/',
});

$api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  return config;
});

// $api.interceptors.response.use(
//   (config) => {
//     return config;
//   },
//   async (error) => {
//   }
// );

export default $api;
