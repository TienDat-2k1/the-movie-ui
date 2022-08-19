import { all, call, takeLatest, put } from 'redux-saga/effects';
import {
  fetchMovieGridSuccess,
  fetchMovieGridError,
  filterWithGenresSuccess,
  filterWithGenresError,
  fetchMovieGridStart,
} from './movieSlice';
import api from '../../api/tmdbApi';

function* fetchMovieGrid({ payload }) {
  try {
    const { type, page } = payload;
    const res = yield fetch(
      api(`movie/${type}`, `&language=en-US&page=${page}`)
    );
    const data = yield res.json();
    yield put(fetchMovieGridSuccess(data));
    // console.log('success');
  } catch (error) {
    yield put(fetchMovieGridError(error));
  }
}
function* fetchMovieWithGenres({ payload }) {
  try {
    const { genres, page } = payload;
    const res = yield fetch(
      api(
        `discover/movie`,
        `&language=en-US&page=${page}&sort_by=popularity.desc&with_genres=${genres.toString()}`
      )
    );
    const data = yield res.json();
    yield put(filterWithGenresSuccess(data));
  } catch (error) {
    yield put(filterWithGenresError(error));
  }
}

function* fetchSortType({ payload }) {
  yield put(fetchMovieGridStart({ type: payload, page: 1 }));
}

function* onFetchMovieGrid() {
  yield takeLatest('movie/fetchMovieGridStart', fetchMovieGrid);
}

function* onfetchMovieWithGenres() {
  yield takeLatest('movie/filterWithGenresStart', fetchMovieWithGenres);
}

function* onSortType() {
  yield takeLatest('movie/setSortType', fetchSortType);
}

function* movieSaga() {
  yield all([
    call(onFetchMovieGrid),
    call(onfetchMovieWithGenres),
    call(onSortType),
  ]);
}

export default movieSaga;
