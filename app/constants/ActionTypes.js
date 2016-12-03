import constants from 'flux-constants';

// constants plugin will return object in this format: { ROUTE_CHANGE: "ROUTE_CHANGE" }
// so I don't have to type out duped strings
export default constants([

  // accounts
  'LOGIN',
  'LOGIN_SUCCESS',
  'LOGIN_FAILURE',
  'GET_USER_PROFILE',
  'GET_USER_PROFILE_SUCCESS',
  'GET_USER_PROFILE_FAILURE',
  'FORGOT_PASSWORD',
  'FORGOT_PASSWORD_SUCCESS',
  'FORGOT_PASSWORD_FAILURE',

  // misc
  'SHOW_TOAST',
  'START_LOADING',
  'END_LOADING',

]);
