const routes = [
  {
    path: '/address/country',
    getComponents: (location, cb) => require.ensure(
      [], () => cb(null, require('./country/List').default), // eslint-disable-line global-require
    ),
    name: 'address.country.list',
  },
];

export default routes;
