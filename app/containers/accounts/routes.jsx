const routes = {
  path: '/accounts',
  onEnter: (router, replaceWith) => {
    if (router.location.pathname === '/accounts') {
      replaceWith(null, '/accounts/login');
    }
  },
  childRoutes: [
    {
      path: '/accounts/login',
      getComponents: (location, cb) => require.ensure(
        [], () => cb(null, require('./Login').default), // eslint-disable-line global-require
      ),
    },
    {
      path: '/accounts/register',
      getComponents: (location, cb) => require.ensure(
        [], () => cb(null, require('./Register').default), // eslint-disable-line global-require
      ),
    },
    {
      path: '/accounts/forgot-password',
      getComponents: (location, cb) => require.ensure(
        [], () => cb(null, require('./ForgotPassword').default), // eslint-disable-line global-require
      ),
    },
  ],
};

export default routes;
