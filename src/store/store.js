import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';
import rootSaga from './rootSaga';
import movieSlice from './movie/movieSlice';
const saga = createSagaMiddleware();

const store = configureStore({
  reducer: { movie: movieSlice },
  middleware: [saga],
});

saga.run(rootSaga);

export default store;
