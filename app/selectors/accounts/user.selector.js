import { createSelector } from 'reselect';

const userProfile = state => state.accounts.user.profile;

export const getProfile = createSelector(
  userProfile,
  profile => profile,
);

export const getFullName = createSelector(
  userProfile,
  profile => profile.name,
);
