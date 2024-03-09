import React from 'react';
import { nanoid } from 'nanoid';
import css from './ContactList.module.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'myredux/operations';
import { useSelector } from 'react-redux';
import { selectFilter, selectContacts } from 'myredux/selectors';
const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

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
        <ContactListItem contact={contact} key={nanoid()} />
      ))}
    </ul>
  );
};
const ContactListItem = ({ contact }) => {
  const dispatch = useDispatch();
  const onContactDelete = evt => {
    evt.preventDefault();
    dispatch(deleteContact(contact.id));
  };
  return (
    <li>
      <p>
        {contact.name}: {contact.phone}
      </p>
      <button type="button" onClick={onContactDelete}>
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
