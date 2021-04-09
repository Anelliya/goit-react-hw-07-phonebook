import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from "redux-persist";
import thunk from 'redux-thunk';

//import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

import contactsReducer from "./reducers/contactsReducer";
import filterReducer from "./reducers/filterReducer";
import loadingReducer from "./reducers/loadingReducer";
import errorReducer from "./reducers/errorReducer"

const myMiddleware = [...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
    }
  }), thunk, logger]

const store = configureStore({
  reducer: {
    items: contactsReducer,
    filter: filterReducer,
    loading: loadingReducer,
    error: errorReducer
  },
    devTools: process.env.NODE_ENV === 'development',
    myMiddleware,
 });

  //const persistor = persistStore(store)


export default { store };