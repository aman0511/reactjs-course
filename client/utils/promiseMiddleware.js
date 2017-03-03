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
          next({ ...rest, error, type: FAILURE });
          throw error;
        },
      );
  };
}
