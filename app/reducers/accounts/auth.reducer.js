import cookie from 'react-cookie';

import types from 'constants/ActionTypes';
import createReducer from 'utils/createReducer';

const defaultState = {
  authorization: null,
  profile: null,
};

// This is more elegant way to write reducers as compared to switch case
function LOGIN_SUCCESS(state, action) {
  let data = action.data;
  if (action.result) {
    data = action.result;
  }
  cookie.save('authToken', data.data.auth_token, { path: '/' });
  return Object.assign({}, state, {
    authorization: data.data.auth_token,
  });
}

function LOGIN_FAILURE(state) {
  return state;
}

function GET_USER_PROFILE_SUCCESS(state, action) {
  return Object.assign({}, state, {
    profile: action.result.data,
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
  [types.GET_USER_PROFILE_SUCCESS]: GET_USER_PROFILE_SUCCESS,
  [types.GET_USER_PROFILE_FAILURE]: GET_USER_PROFILE_FAILURE,
  [types.FORGOT_PASSWORD_SUCCESS]: FORGOT_PASSWORD_SUCCESS,
  [types.FORGOT_PASSWORD_FAILURE]: FORGOT_PASSWORD_FAILURE,
};

export default createReducer(defaultState, handlers);
