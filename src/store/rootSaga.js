import { call, all } from 'redux-saga/effects';
import { homeSaga } from './homeActions/homeSaga';

function* rootSaga() {
  yield all([call(homeSaga)]);
}
export default rootSaga;
