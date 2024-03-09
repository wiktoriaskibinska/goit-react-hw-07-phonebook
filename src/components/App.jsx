import React from 'react';
import ContactForm from './contactform/ContactForm';
import ContactList from './contactlist/ContactList';
import Filter from './filter/Filter';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getItems } from 'myredux/selectors';
import { fetchContacts } from 'myredux/operations';
import axios from 'axios';
axios.defaults.baseURL = `https://65ea1b39c9bf92ae3d3b1792.mockapi.io/`;

export const App = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  const items = useSelector(getItems);

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);
  useEffect(() => {
    dispatch(fetchContacts());
    console.log(items);
  }, [dispatch]);

  return (
    <div
      style={{
        height: '100vh',

        flexWrap: 'wrap',
        alignItems: 'center',
        textAlign: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        {contacts.length > 0 ? (
          <Filter />
        ) : (
          <p>Your phonebook is empty! Add some contacts </p>
        )}
      </div>
      <div
        style={{
          justifyContent: 'center',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <ContactList />
      </div>
    </div>
  );
};
