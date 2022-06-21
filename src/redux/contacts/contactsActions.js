import { createAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export const addContactActions = createAction(
  'contacts/AddContact',
  ({ name, number }) => ({
    payload: {
      id: nanoid(),
      name,
      number,
    },
  })
);

export const deleteContactsActions = createAction('contacts/DeleteContact');

export const filterContactsActions = createAction('contacts/FilterContacts');
