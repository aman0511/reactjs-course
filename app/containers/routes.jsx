// import * as UserActions from 'actions/accounts/user.actions';

export default (store) => {
  // const requireAuth = (nextState, replace, cb) => {
  //   const { accounts: { user: { profile } } } = store.getState();
  //   if (!profile) {
  //     store.dispatch(UserActions.getUserProfile())
  //       .then(
  //         () => {
  //           const user = store.getState().accounts.user.profile;
  //           if (!user) replace('/');
  //           cb();
  //         },
  //         () => {
  //           replace('/');
  //           cb();
  //         },
  //       );
  //   } else {
  //     cb();
  //   }
  // };
  console.log(store);

  return {
    childRoutes: [
      {
        path: '/',
        component: require('./App').default, // eslint-disable-line global-require
        childRoutes: [
          require('./accounts/routes').default, // eslint-disable-line global-require
        ],
        indexRoute: {
          component: require('./Home').default, // eslint-disable-line global-require
        },
      },
    ],
  };
};
