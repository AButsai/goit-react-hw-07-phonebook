import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addContactActions } from '../../redux/contacts/contactsActions';
import { getAllContacts } from 'redux/contacts/contacts-selector';

import s from './ContactForm.module.css';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const allContacts = useSelector(getAllContacts);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const contactsCheck = name => {
    const normalizedNmae = name.toLowerCase();
    for (const { name } of allContacts) {
      if (name.toLowerCase() === normalizedNmae) {
        return true;
      }
    }
    return false;
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (contactsCheck(name)) {
      alert(`Контакт с именем ${name} уже существует в ваших контактах`);
    } else {
      dispatch(addContactActions({ name, number }));
    }

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <>
      <form className={s.form} onSubmit={handleSubmit}>
        <label className={s.label}>
          <span className={s.title}>Name</span>
          <input
            className={s.input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={handleChange}
            placeholder="Enter name"
          />
        </label>
        <label className={s.label}>
          <span className={s.title}>Number</span>
          <input
            className={s.input}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={handleChange}
            placeholder="Enter number"
          />
        </label>
        <button className={s.btn} type="submit">
          Add contact
        </button>
      </form>
    </>
  );
};

export default ContactForm;
