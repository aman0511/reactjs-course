import axios from 'axios';
import cookie from 'react-cookie';

// Add a request interceptor
axios.interceptors.request.use(
  (configuration) => {
    const config = configuration;
    const authToken = cookie.load('authToken');
    if (authToken) {
      config.headers.Authorization = `Token ${authToken}`;
    }
    return config;
  },
  error => Promise.reject(error),
);

// Add a response interceptor
axios.interceptors.response.use(
  response => response.data,
  error => Promise.reject(error),
);

export default axios;
