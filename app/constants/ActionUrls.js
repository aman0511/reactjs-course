const SERVER_URL = 'http://localhost:8000';

module.exports = {
  // Accounts
  LOGIN: `${SERVER_URL}/accounts/login/`,
  REGISTER: `${SERVER_URL}/accounts/register/`,
  USER_PROFILE: `${SERVER_URL}/accounts/me/`,
  FORGOT_PASSWORD: `${SERVER_URL}/accounts/forgot-password/`,
  CHANGE_PASSWORD: `${SERVER_URL}/accounts/change-password/`,
  LOGOUT: `${SERVER_URL}/accounts/logout/`,

};
