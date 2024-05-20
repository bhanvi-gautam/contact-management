import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
import ContactList from '../features/contacts/ContactList';

const Contacts: React.FC = () => {
  const contacts = useSelector((state: RootState) => state.contacts.contacts);

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h2 className="text-xl font-semibold mb-4">Contacts</h2>
      <Link to="/contacts/create" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Create Contact</Link>
      {contacts.length === 0 ? (
        <div className="mt-4 p-4 bg-gray-100 text-gray-600 text-center">
          No contacts found. Please add contacts using the button above.
        </div>
      ): <ContactList/>}
    </div>
  );
};

export default Contacts;
