import types from 'actions/misc/actionTypes';

export default function promiseMiddleware() {
  return next => (action) => {
    const { promise, type, ...rest } = action;
    if (!promise) return next(action);

    const SUCCESS = `${type}_SUCCESS`;
    const FAILURE = `${type}_FAILURE`;

    next({ ...rest, type });

    return promise
      .then(
        (result) => {
          next({ ...rest, result, type: SUCCESS });
          return result;
        },
        (error) => {
          if (error.toString().indexOf('Network') > -1) {
            next({
              message: 'Oops! There is a problem with your network.'
              + ' Some features might not work.',
              type: types.SHOW_TOAST,
            });
          }
          if (error.status === 500) {
            next({
              message: 'Oops! Our server is experiencing trouble.'
              + ' Please retry after some time.',
              type: types.SHOW_TOAST,
            });
          }
          next({ ...rest, error, type: FAILURE });
          throw error;
        },
      );
  };
}
