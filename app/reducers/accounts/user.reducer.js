import cookie from 'react-cookie';

import types from 'constants/ActionTypes';
import createReducer from 'utils/createReducer';

const defaultState = {
  authorization: null,
  profile: null,
};

function LOGIN_SUCCESS(state, action) {
  cookie.save('authToken', action.result.auth_token, { path: '/' });
  return Object.assign({}, state, {
    authorization: action.result.auth_token,
  });
}

function LOGIN_FAILURE(state) {
  return state;
}

function REGISTER_SUCCESS(state, action) {
  cookie.save('authToken', action.result.auth_token, { path: '/' });
  return Object.assign({}, state, {
    authorization: action.result.auth_token,
  });
}

function REGISTER_FAILURE(state) {
  return state;
}

function GET_USER_PROFILE_SUCCESS(state, action) {
  const data = action.result;
  data.states = [
    { url: '/dashboard/home', label: 'Home', position: 'nav' },
    { url: '/dashboard/profile', label: 'Profile', position: 'nav' },
    { url: '/dashboard/settings', label: 'Settings', position: 'header' },
  ];
  return Object.assign({}, state, {
    profile: data,
  });
}

function GET_USER_PROFILE_FAILURE(state) {
  return Object.assign({}, state, {});
}

function FORGOT_PASSWORD_SUCCESS(state) {
  return state;
}

function FORGOT_PASSWORD_FAILURE(state) {
  return state;
}

const handlers = {
  [types.LOGIN_SUCCESS]: LOGIN_SUCCESS,
  [types.LOGIN_FAILURE]: LOGIN_FAILURE,
  [types.REGISTER_SUCCESS]: REGISTER_SUCCESS,
  [types.REGISTER_FAILURE]: REGISTER_FAILURE,
  [types.GET_USER_PROFILE_SUCCESS]: GET_USER_PROFILE_SUCCESS,
  [types.GET_USER_PROFILE_FAILURE]: GET_USER_PROFILE_FAILURE,
  [types.FORGOT_PASSWORD_SUCCESS]: FORGOT_PASSWORD_SUCCESS,
  [types.FORGOT_PASSWORD_FAILURE]: FORGOT_PASSWORD_FAILURE,
};

export default createReducer(defaultState, handlers);
