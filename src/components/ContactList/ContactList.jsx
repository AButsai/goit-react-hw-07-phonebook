import { useSelector, useDispatch } from 'react-redux';
import {
  deleteContactsActions,
  filterContactsActions,
} from 'redux/contacts/contactsActions';
import { filterContact } from 'redux/contacts/contacts-selector';
import ContactListItem from 'components/ContactListItem';

import s from './ContactList.module.css';

const ContactList = () => {
  const allContact = useSelector(filterContact);

  const dispatch = useDispatch();

  const deleteContact = id => {
    dispatch(deleteContactsActions(id));
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
