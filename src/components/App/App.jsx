import React from 'react';

import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';

import s from './App.module.css';

function App() {
  return (
    <div className={s.container}>
      <h1 className={s.title}>Phonebook</h1>
      <ContactForm />
      <h2 className={s.contactsTitle}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}

export default App;
