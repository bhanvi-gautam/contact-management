import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { editContact } from './ContactsSlice';
import { RootState } from '../../app/store';
import { Contact } from './types';

const EditContact: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const contacts = useSelector((state: RootState) => state.contacts.contacts);
  const [contact, setContact] = useState<Contact | null>(null);
  const [status, setStatus] = useState<string>('');

  useEffect(() => {
    const selectedContact = contacts.find((c) => c.id === id);
    if (selectedContact) {
      setContact(selectedContact);
      setStatus(selectedContact.status);
    } else {
      navigate('/')
    }
  }, [id, contacts]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Update the contact object with new form field values
    if (contact) {
      const { name, value } = e.target;
      setContact({ ...contact, [name]: value });
    }
  };

  // interface EditContactPayload {
  //   id: string;
  //   contact: Contact;
  // }

  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (contact) {
      const editedContact = {
        id: contact.id,
        contact: {
          ...contact,
          status: status,
        },
      };
      // Dispatch action to update contact in Redux store
      dispatch(editContact(editedContact));
      // Redirect to contact list page after updating
      navigate('/');
    }
  };
  

  return (
 
    <>
      <div>Edit Contact Form</div>
      {contact &&
        <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
          <div className="relative z-0 w-full mb-5 group">
            <input type="text" name="firstName" defaultValue={contact.firstName} onChange={handleChange} id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
            <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First Name</label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input type="text" name="lastName" id="floating_last_name" defaultValue={contact.lastName} onChange={handleChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
            <label htmlFor="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last Name</label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="phone" id="floating_phone" defaultValue={contact.phone} onChange={handleChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="" required />
            <label htmlFor="floating_phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number (123-456-7890)</label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
          <label className="block mb-1 text-sm font-medium text-gray-700">Status</label>
            <div className="grid md:grid-cols-2 md:gap-6">
                <div className="flex items-center mb-4">
                    <input id="default-radio-1" type="radio" value="active" checked={status === 'active'} onChange={() => setStatus('active')} name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label htmlFor="default-radio-1" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Active</label>
                </div>
                <div className="flex items-center">
                    <input id="default-radio-2" type="radio" value="inactive" checked={status === 'inactive'} name="default-radio" onChange={() => setStatus('inactive')} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label htmlFor="default-radio-2" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Inactive</label>
                </div>
            </div>
        </div> 
          <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </form>
      }

    </>
  );
};

export default EditContact;
