import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';
import rootSaga from './rootSaga';
import wishlistSlice from './wishlist/wishlistSlice';

const saga = createSagaMiddleware();

const store = configureStore({
  reducer: { wishlist: wishlistSlice },
  middleware: [saga],
});

saga.run(rootSaga);

export default store;
