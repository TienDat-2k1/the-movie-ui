import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  movieGrid: [],
  isLoading: false,
  error: undefined,
  sortType: 'now_playing',
  filterGenres: [],
  totalPage: 0,
  pageActive: 1,
};

const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    fetchMovieGridStart: (state, action) => {
      state.isLoading = true;
      state.error = undefined;
      state.pageActive = action.payload.page;
    },
    fetchMovieGridSuccess: (state, action) => {
      state.isLoading = false;
      state.error = undefined;
      state.movieGrid = action.payload.results;

      if (action.payload.total_pages > 20) {
        state.totalPage = 20;
      } else {
        state.totalPage = action.payload.total_pages;
      }
    },
    fetchMovieGridError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    filterWithGenresStart: (state, action) => {
      state.isLoading = true;
      state.error = undefined;
      state.pageActive = action.payload.page;
      state.filterGenres = action.payload.genres;
    },
    filterWithGenresSuccess: (state, action) => {
      state.isLoading = false;
      state.error = undefined;
      state.movieGrid = action.payload.results;
      if (action.payload.total_pages > 20) {
        state.totalPage = 20;
      } else {
        state.totalPage = action.payload.total_pages;
      }
    },
    filterWithGenresError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    setPageActive: (state, action) => {
      state.pageActive = action.payload;
    },
    setSortType: (state, action) => {
      state.sortType = action.payload;
    },
  },
});

export const {
  fetchMovieGridStart,
  fetchMovieGridSuccess,
  fetchMovieGridError,
  filterWithGenresStart,
  filterWithGenresSuccess,
  filterWithGenresError,
  setPageActive,
  setSortType,
} = movieSlice.actions;

export default movieSlice.reducer;
