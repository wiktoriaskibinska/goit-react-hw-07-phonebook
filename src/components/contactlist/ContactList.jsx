import React from 'react';
import { nanoid } from 'nanoid';
import css from './ContactList.module.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'myredux/contactsSlice';
import { useSelector } from 'react-redux';
import { getFilter, getContacts } from 'myredux/selectors';
const ContactList = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const onContactDelete = evt => {
    const idToDelete = evt.target.value;
    dispatch(deleteContact(idToDelete));
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  const visibleContacts = getVisibleContacts();

  return (
    <ul className={css.contactList}>
      {visibleContacts.map(contact => (
        <ContactListItem
          contact={contact}
          onContactDelete={onContactDelete}
          key={nanoid()}
        />
      ))}
    </ul>
  );
};
const ContactListItem = ({ contact, onContactDelete }) => {
  return (
    <li>
      <p>
        {contact.name}: {contact.number}
      </p>
      <button type="button" onClick={onContactDelete} value={contact.id}>
        Delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  contact: PropTypes.object,
  onContactDelete: PropTypes.func,
};
export default ContactList;
