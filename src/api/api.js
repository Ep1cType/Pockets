import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://89.108.102.170/api/',
});

export default instance;
