import axios from 'axios';

const BASE_URL = 'https://62b337c34f851f87f456f4e1.mockapi.io/api/v1/contacts';

export const getAllContacts = axios.create({
  method: 'GET',
  baseURL: BASE_URL,
});

export const postContacts = axios.create({
  method: 'POST',
  baseURL: BASE_URL,
});

export const deleteContact = axios.create({
  method: 'DELETE',
  baseURL: BASE_URL,
});
