import { all, call, takeLatest } from 'redux-saga/effects';
import API from '../../api/tmdbApi';
import KEY from '../../api/apiKey';

function* fetchTrendingStart({ payload }) {
  try {
    const res = yield call(
      fetch,
      `${API}/trending/${payload.mediaType}/${payload.time}?api_key=${KEY}`
    );
    const data = yield res.json();
    console.log(data);
  } catch (error) {
    console.log('error when fetching data trending', error);
  }
}

function* onFetchTrending() {
  yield takeLatest('home/fetchTrending', fetchTrendingStart);
}

export function* homeSaga() {
  yield all([call(onFetchTrending)]);
}
