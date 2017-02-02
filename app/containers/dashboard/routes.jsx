const routes = [
  {
    path: '/dashboard/home',
    getComponents: (location, cb) => require.ensure(
      [], () => cb(null, require('./Dashboard').default), // eslint-disable-line global-require
    ),
  },
];

export default routes;
