import { call, all } from 'redux-saga/effects';
import movieSaga from './movie/movieSaga';
import userSaga from './user/userSaga';
function* rootSaga() {
  yield all([call(movieSaga), call(userSaga)]);
}
export default rootSaga;
