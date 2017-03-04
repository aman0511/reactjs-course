import SERVER_URL from '../constants';

module.exports = {
  LOGIN: `${SERVER_URL}/accounts/login/`,
  REGISTER: `${SERVER_URL}/accounts/register/`,
  USER_PROFILE: `${SERVER_URL}/accounts/me/`,
  FORGOT_PASSWORD: `${SERVER_URL}/accounts/forgot-password/`,
  LOGOUT: `${SERVER_URL}/accounts/logout/`,
};
