import { configureStore } from '@reduxjs/toolkit';

import { persistStore, persistReducer } from 'redux-persist';

import contactsReduser from './contacts/contactsRedusers';
import { contactsPersistConfig } from './contacts/contactsPersistConfig';

import { middleware } from './contacts/contactsMiddleware';

export const store = configureStore({
  reducer: {
    contacts: persistReducer(contactsPersistConfig, contactsReduser),
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
