const SERVER_URL = 'http://localhost:8003';

module.exports = {
  LOGIN: `${SERVER_URL}/accounts/login/`,
  REGISTER: `${SERVER_URL}/accounts/register/`,
  USER_PROFILE: `${SERVER_URL}/accounts/me/`,
  FORGOT_PASSWORD: `${SERVER_URL}/accounts/forgot-password/`,
};
