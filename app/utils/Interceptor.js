import axios from 'axios';
import cookie from 'react-cookie';

const instance = axios.create();
// Add a request interceptor
instance.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    const authToken = cookie.load('authToken');
    if (authToken) {
      config.headers.Authorization = `Token ${authToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Add a response interceptor
instance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

export default instance;
