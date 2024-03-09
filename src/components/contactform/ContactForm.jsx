import React from 'react';
import css from './ContactForm.module.css';
//import PropTypes from 'prop-types';
//import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'myredux/selectors';
import { addContact } from 'myredux/contactsSlice';
import { nanoid } from '@reduxjs/toolkit';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    const newContact = {
      id: nanoid(),
      name: name,
      number: number,
    };
    const isInContactsList = contacts.some(
      ({ number }) => number === newContact.number
    );
    if (isInContactsList) {
      alert(`${newContact.name} is already in the contact list`);
    } else {
      dispatch(addContact(newContact));
      evt.target.reset();
    }
  };

  return (
    <form className={css.form} id="contactform" onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Za-яА-Я]+(([' -][a-zA-Za-яА-Я ])?[a-zA-Za-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label>Number</label>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button type="submit" form="contactform" className={css.formBttn}>
          Add Contact
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
