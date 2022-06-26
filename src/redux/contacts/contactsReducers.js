import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { filterContactsActions } from './contactsActions';
import {
  fetchContacts,
  fetchAddContact,
  fetchDeleteContact,
} from './contactsOperations';

const items = createReducer([], {
  [fetchContacts.fulfilled]: (_state, { payload }) => {
    return payload;
  },
  [fetchAddContact.fulfilled]: (state, { payload }) => {
    return [...state, payload];
  },
  [fetchDeleteContact.fulfilled]: (state, { payload }) => {
    return [...state].filter(({ id }) => id !== payload.id);
  },
});

const isLoading = createReducer(false, {
  [fetchDeleteContact.pending]: () => {
    return true;
  },
  [fetchDeleteContact.fulfilled]: () => {
    return false;
  },
});

const filter = createReducer('', {
  [filterContactsActions]: (_state, { payload }) => {
    return payload;
  },
});

export default combineReducers({
  items,
  isLoading,
  filter,
});
