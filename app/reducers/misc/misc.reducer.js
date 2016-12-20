import types from 'actions/misc/actionTypes';
import createReducer from 'utils/createReducer';

const defaultState = {
  isLoading: false,
};

function START_LOADING(state) {
  return Object.assign({}, state, { isLoading: true });
}

function END_LOADING(state) {
  return Object.assign({}, state, { isLoading: false });
}

const handlers = {
  [types.START_LOADING]: START_LOADING,
  [types.END_LOADING]: END_LOADING,
};

export default createReducer(defaultState, handlers);
