import { useSelector, useDispatch } from 'react-redux';
import { filterContactsActions } from 'redux/contacts/contactsActions';
import { getFilter } from 'redux/contacts/contacts-selector';
import s from './Filter.module.css';

const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <label className={s.label}>
      Find contacts by name
      <input
        className={s.input}
        type="text"
        name="filter"
        value={value}
        onChange={e => dispatch(filterContactsActions(e.target.value))}
        placeholder="Enter search name"
      />
    </label>
  );
};

export default Filter;
