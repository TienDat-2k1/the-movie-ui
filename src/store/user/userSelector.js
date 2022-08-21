import { createSelector } from 'reselect';

const userReducer = state => state.user;

export const isLoggedSelector = createSelector(
  [userReducer],
  user => user.isLogged
);

export const userErrorSelector = createSelector(
  [userReducer],
  user => user.error
);

export const userSelector = createSelector([userReducer], user => user.user);

export const wishlistSelector = createSelector(
  [userReducer],
  user => user.wishlist
);
