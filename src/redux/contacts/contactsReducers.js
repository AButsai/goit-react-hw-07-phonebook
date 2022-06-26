import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { filterContactsActions } from './contactsActions';
import {
  fetchContacts,
  fetchAddContact,
  fetchDeleteContact,
} from './contactsOperations';

const items = createReducer([], {
  [fetchContacts.fulfilled]: (_, { payload }) => payload,
  [fetchAddContact.fulfilled]: (state, { payload }) => [...state, payload],
  [fetchDeleteContact.fulfilled]: (state, { payload }) =>
    [...state].filter(({ id }) => id !== payload.id),
});

const filter = createReducer('', {
  [filterContactsActions]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});
