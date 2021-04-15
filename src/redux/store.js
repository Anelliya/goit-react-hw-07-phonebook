import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import logger from 'redux-logger';
import storage from 'redux-persist/lib/storage';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import thunk from 'redux-thunk';

import contactsReducer from "./contacts/reducers/contactsReducer";
import filterReducer from "./contacts/reducers/filterReducer";
import loadingReducer from "./contacts/reducers/loadingReducer";
import errorReducer from "./contacts/reducers/errorReducer";
import authReducer from "./auth/auth-reducers"


const persistConfig= {
  key: 'token',
  storage,
  whitelist: ['token']
}

const store = configureStore({
  reducer: {
    items: contactsReducer,
    filter: filterReducer,
    loading: loadingReducer,
    error: errorReducer,
    auth: persistReducer(persistConfig, authReducer)
  },
    middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
      thunk,
      logger
  }),
  devTools: process.env.NODE_ENV === 'development',
    
 });

const persistor = persistStore(store)

export default { store, persistor };