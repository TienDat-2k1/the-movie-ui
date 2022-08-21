import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';
import rootSaga from './rootSaga';
import movieSlice from './movie/movieSlice';
import userSlice from './user/userSlice';
const saga = createSagaMiddleware();

const store = configureStore({
  reducer: { movie: movieSlice, user: userSlice },
  middleware: [saga],
});

saga.run(rootSaga);

export default store;
