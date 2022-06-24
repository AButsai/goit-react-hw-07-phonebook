import PropTypes from 'prop-types';
import { Spinner } from 'react-bootstrap';
import s from './ContactListItem.module.css';

const ContactListItem = ({
  contacts: { id, name, number },
  deleteContact,
  isLoading,
}) => {
  return (
    <li className={s.item}>
      <span className={s.span}>
        {name}: {number}
      </span>
      <button
        className={s.btn}
        id={id}
        onClick={e => {
          deleteContact(id);
        }}
        onMouseDown={e => {
          e.target.style.backgroundColor = '#0000ff';
          e.target.style.color = '#ffffff';
        }}
        onMouseUp={e => {
          e.target.style.backgroundColor = 'transparent';
          e.target.style.color = '#000000';
        }}
        type="button"
      >
        {isLoading ? (
          <Spinner animation="border" variant="dark" size="sm" />
        ) : (
          'Delete'
        )}
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  contacts: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
  isLoading: PropTypes.bool,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactListItem;
