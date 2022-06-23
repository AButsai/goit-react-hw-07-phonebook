import { createAsyncThunk } from '@reduxjs/toolkit';
import * as API from 'service/contactsAPI';

export const fetchContacts = createAsyncThunk(
  'contacts/getContacts',
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await API.getContacts();
      return contacts;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const fetchAddContact = createAsyncThunk(
  'contacts/addContatct',
  async (data, { rejectWithValue }) => {
    try {
      const post = await API.postContact(data);
      return post;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const fetchDeleteContact = createAsyncThunk(
  'contacts/DeleteContact',
  async (id, { rejectWithValue }) => {
    try {
      const contacts = await API.deleteContact(id);
      return contacts;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
