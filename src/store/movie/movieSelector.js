import { createSelector } from '@reduxjs/toolkit';

const movieReducer = state => state.movie;

export const movieGridSelect = createSelector([movieReducer], movie => {
  return movie.movieGrid;
});

export const movieIsLoading = createSelector(
  [movieReducer],
  movie => movie.isLoading
);

export const movieFilterGenres = createSelector(
  [movieReducer],
  movie => movie.filterGenres
);

export const totalPageSelector = createSelector(
  [movieReducer],
  movie => movie.totalPage
);

export const pageActiveSelector = createSelector(
  [movieReducer],
  movie => movie.pageActive
);

export const sortTypeSelector = createSelector(
  [movieReducer],
  movie => movie.sortType
);

export const searchKeySelector = createSelector(
  [movieReducer],
  movie => movie.search.key
);

export const searchPageSelector = createSelector(
  [movieReducer],
  movie => movie.search.page
);
