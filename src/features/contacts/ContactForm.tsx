import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addContact } from './ContactsSlice';
import { useNavigate } from 'react-router-dom';

interface NewContact {
    id: string;
    firstName: string;
    lastName: string;
    phone: string;
    status: string;
  } 

const ContactForm: React.FC = () => {
    const dispatch = useDispatch();
    const navigate=useNavigate();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [status, setStatus] = useState('active');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Basic form validation
        if (!firstName || !lastName || !phone) {
            alert('Please fill in all fields');
            return;
        }

        // Creating a new contact object
        // Creating a newContact object
        const newContact: NewContact = {
            id:uuidv4(), //unique id
            firstName,
            lastName,
            phone,
            status,
        };

        // Dispatching the action to add the contact
        dispatch(addContact(newContact));

        // Clearing the form fields after submission
        setFirstName('');
        setLastName('');
        setPhone('');
        setStatus('active'); // Resetting status to default
        navigate('/');

    };
    return (
        <>
            <div>Add Contact Form</div>
            <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
                <div className="relative z-0 w-full mb-5 group">
                    <input type="text" name="floating_first_name"  value={firstName}  onChange={(e)=>setFirstName(e.target.value)} id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First Name</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input type="text" name="floating_last_name" id="floating_last_name" value={lastName} onChange={(e)=>setLastName(e.target.value)} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last Name</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="floating_phone" id="floating_phone" value={phone} onChange={(e)=>{setPhone(e.target.value)}} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="" required />
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

        </>
    );
};

export default ContactForm;


