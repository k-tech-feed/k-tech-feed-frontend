import axios from 'axios';

const apiRequest = axios.create({
  baseURL: 'http://localhost:8000',
  withCredentials: true,
});

export { apiRequest };
