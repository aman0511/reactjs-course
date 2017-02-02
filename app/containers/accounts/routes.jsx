const routes = [
  {
    path: '/login',
    getComponents: (location, cb) => require.ensure(
      [], () => cb(null, require('./Login').default), // eslint-disable-line global-require
    ),
  },
  {
    path: '/register',
    getComponents: (location, cb) => require.ensure(
      [], () => cb(null, require('./Register').default), // eslint-disable-line global-require
    ),
  },
  {
    path: '/forgot-password',
    getComponents: (location, cb) => require.ensure(
      [], () => cb(null, require('./ForgotPassword').default), // eslint-disable-line global-require
    ),
  },
];

export default routes;
