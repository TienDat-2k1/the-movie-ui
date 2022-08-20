import { call, all } from 'redux-saga/effects';
import movieSaga from './movie/movieSaga';
function* rootSaga() {
  yield all([call(movieSaga)]);
}
export default rootSaga;
