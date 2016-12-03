import types from 'constants/ActionTypes';

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

export default { showToast, startLoading };
