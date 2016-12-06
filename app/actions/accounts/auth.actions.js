import axios from 'utils/Interceptor';
import types from 'constants/ActionTypes';
import URLS from 'constants/ActionUrls';

export function login(data) {
  return {
    type: types.LOGIN,
    promise: axios.post(URLS.LOGIN, data),
  };
}

export function register(data) {
  return {
    type: types.REGISTER,
    promise: axios.post(URLS.REGISTER, data),
  };
}

export function getUserProfile() {
  return {
    type: types.GET_USER_PROFILE,
    promise: axios.get(URLS.USER_PROFILE),
  };
}

export function forgotPassword(data) {
  return {
    type: types.FORGOT_PASSWORD,
    promise: axios.post(URLS.FORGOT_PASSWORD, data),
  };
}

export default { login, register, getUserProfile, forgotPassword };
