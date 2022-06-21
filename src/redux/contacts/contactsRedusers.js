import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  addContactActions,
  deleteContactsActions,
  filterContactsActions,
} from './contactsActions';

const items = createReducer([], {
  [addContactActions]: (state, { payload }) => [...state, payload],
  [deleteContactsActions]: (state, { payload }) =>
    [...state].filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [filterContactsActions]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});
