import * as UserActions from 'actions/accounts/user.actions';

export default (store) => {
  const requireAuth = (nextState, replace, cb) => {
    const { accounts: { user: { profile } } } = store.getState();
    if (!profile) {
      store.dispatch(UserActions.getUserProfile())
        .then(
          () => {
            const user = store.getState().accounts.user.profile;
            if (!user) replace('/');
            const isAllowed = user.states.filter(item => item.url === nextState.location.pathname);
            if (!isAllowed.length) replace(user.states[0].url);
            cb();
          },
          () => {
            replace('/');
            cb();
          },
        );
    } else {
      cb();
    }
  };

  return {
    childRoutes: [
      {
        path: '/',
        component: require('./App').default, // eslint-disable-line global-require
        childRoutes: [
          require('./accounts/routes').default, // eslint-disable-line global-require
          {
            path: '/dashboard',
            onEnter: requireAuth,
            childRoutes: [
              {
                path: '/dashboard/home',
                getComponents: (location, cb) => require.ensure(
                  [], () => cb(null, require('./dashboard/Dashboard').default), // eslint-disable-line global-require
                ),
              },
            ],
          },
          {
            path: '*',
            component: require('./NotFound').default, // eslint-disable-line global-require
          },
        ],
        indexRoute: {
          component: require('./Home').default, // eslint-disable-line global-require
        },
      },
    ],
  };
};
