import {
  configureStore,
  getDefaultMiddleware,
  combineReducers,
} from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { contactsApi } from './services/contacts-slice';

const middleware = [...getDefaultMiddleware(), contactsApi.middleware, logger];

const store = configureStore({
  reducer: combineReducers({
    [contactsApi.reducerPath]: contactsApi.reducer,
  }),
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export { store };
