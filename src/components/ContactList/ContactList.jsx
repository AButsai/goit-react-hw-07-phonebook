import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterContactsActions } from 'redux/contacts/contactsActions';
import { filterContact } from 'redux/contacts/contactsSelectors';
import ContactListItem from 'components/ContactListItem';
import {
  fetchContacts,
  fetchDeleteContact,
} from 'redux/contacts/contactsOperations';
import { getIsLoading } from 'redux/contacts/contactsSelectors';

import s from './ContactList.module.css';

const ContactList = () => {
  const allContact = useSelector(filterContact);
  const isLoading = useSelector(getIsLoading);

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
          isLoading={isLoading}
        />
      ))}
    </ul>
  );
};

export default ContactList;
