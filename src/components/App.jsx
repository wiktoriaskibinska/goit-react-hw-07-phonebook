import React from 'react';
import ContactForm from './contactform/ContactForm';
import ContactList from './contactlist/ContactList';
import Filter from './filter/Filter';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getContacts } from 'myredux/selectors';

export const App = () => {
  const contacts = useSelector(getContacts);

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

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
