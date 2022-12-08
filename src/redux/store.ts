import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleWare from "redux-saga";
import users from './reducers/Users/reducer'
import rootSagas from './rootSagas';

const saga = createSagaMiddleWare();

const store = configureStore({
    reducer: {
      users
    },
    middleware: [saga]
  })
  saga.run(rootSagas)

export default store;

export type RootState = ReturnType<typeof store.getState>