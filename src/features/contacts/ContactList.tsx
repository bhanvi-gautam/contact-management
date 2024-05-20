import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import ContactDetails from './ContactDetails';
import { Contact } from './types';

const ContactList: React.FC = () => {
  // Retrieve contacts from Redux store
  const contacts = useSelector((state: RootState) => state.contacts.contacts);

  useEffect(() => {
    console.log('contacts', contacts);
  }, [contacts]);

  return (
    <div>
      <h2>Contact List</h2>
      {/* Render contact list here */}
      {contacts.map((contact: Contact) => (
        <div key={contact.id}>
          <ContactDetails data={contact} />
        </div>
      ))}
    </div>
  );
};

export default ContactList;
