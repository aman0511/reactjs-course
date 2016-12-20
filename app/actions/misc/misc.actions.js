import types from './actionTypes';

export function showToast(message) {
  return {
    type: types.SHOW_TOAST,
    message,
  };
}

export function startLoading() {
  return {
    type: types.START_LOADING,
  };
}

export function endLoading() {
  return {
    type: types.END_LOADING,
  };
}
