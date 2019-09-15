/* eslint-disable no-param-reassign */
import axios from 'axios';

export const API_URL =  'https://quick-credit-loan.herokuapp.com/api/v1';

export const instance = axios.create({
  baseURL: API_URL,
});

instance.interceptors.request.use((config) => {
  if (localStorage.jwtToken) {
    config.headers.Authorization = `Bearer ${localStorage.jwtToken}`;
  }
  return config;
});

const API_SERVICE = {
  get(endpoint) {
    return instance.get(endpoint);
  },

  post(endpoint, data) {
    return instance.post(endpoint, data);
  },

  patch(endpoint, data) {
    return instance.patch(endpoint, data);
  },

  delete(endpoint) {
    return instance.delete(endpoint);
  },
};

export default API_SERVICE;

