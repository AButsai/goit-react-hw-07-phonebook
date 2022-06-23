import { useSelector, useDispatch } from 'react-redux';
import { filterContactsActions } from 'redux/contacts/contactsActions';
import { filterContact } from 'redux/contacts/contactsSelector';
import ContactListItem from 'components/ContactListItem';
import {
  fetchContacts,
  fetchDeleteContact,
} from 'redux/contacts/contactsOperations';
import { useEffect } from 'react';

import s from './ContactList.module.css';

const ContactList = () => {
  const allContact = useSelector(filterContact);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const deleteContact = id => {
    dispatch(fetchDeleteContact(id));
    dispatch(filterContactsActions(''));
  };

  return (
    <ul className={s.list}>
      {allContact.map(({ id, name, number }) => (
        <ContactListItem
          key={id}
          contacts={{ id, name, number }}
          deleteContact={deleteContact}
        />
      ))}
    </ul>
  );
};

export default ContactList;
