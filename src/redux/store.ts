import { configureStore } from '@reduxjs/toolkit';
const createSagaMiddleware = require('redux-saga').default;
import { productReducer } from './reducers/productReducer';
import { watchProductSaga } from './sagas/productSaga';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    inventory: productReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(watchProductSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


