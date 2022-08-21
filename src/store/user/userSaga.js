import { all, call, takeLatest, put } from 'redux-saga/effects';
import {
  createDocFromAuth,
  createUser,
  signInEmailAndPass,
  userSignOut,
} from '../../utils/firebase/firebase';
import { signInSuccess, signUpError, signUpSuccess } from './userSlice';

function* signInAfterSignUp({ payload }) {
  try {
    console.log(payload);
    const { uid, email, displayName, photoUrl } = payload;
    yield put(signInSuccess({ uid, email, displayName, photoUrl }));
  } catch (error) {
    alert(error.message);
  }
}

function* SignUp({ payload: { email, password, ...otherProps } }) {
  try {
    const { user } = yield call(createUser, email, password);
    yield put(signUpSuccess({ ...user.providerData[0], ...otherProps }));
  } catch (error) {
    yield put(signUpError(error.message));
  }
}

function* signIn({ payload }) {
  try {
    const user = yield signInEmailAndPass(payload.email, payload.password);
    const { displayName, email, uid, photoUrl } = user;
    yield put(signInSuccess({ displayName, email, uid, photoUrl }));
  } catch (error) {
    alert(error.message);
  }
}
function* signOut() {
  yield userSignOut();
}

function* onSignUpSuccess() {
  yield takeLatest('user/signUpSuccess', signInAfterSignUp);
}

function* onSignUp() {
  yield takeLatest('user/signUpStart', SignUp);
}

function* onSignIn() {
  yield takeLatest('user/signInStart', signIn);
}
function* onSignOut() {
  yield takeLatest('user/signOut', signOut);
}

function* userSaga() {
  yield all([
    call(onSignUpSuccess),
    call(onSignUp),
    call(onSignIn),
    call(onSignOut),
  ]);
}

export default userSaga;
