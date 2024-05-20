
import React from 'react';
import { Contact } from './types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';

interface Props {
  data: Contact;
}

const ContactDetails: React.FC<Props> = ({ data }) => {
  return (
    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <FontAwesomeIcon icon={faPhone} />
      <a href="#">
        <h6 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{data.firstName} {data.lastName}</h6>
      </a>
      <a href="#">
        <h6 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{data.phone}</h6>
      </a>
      <a href="#">
        <h6 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Status: {data.status}</h6>
      </a>
      <button className="p-2 m-2 bg-blue-500 text-white rounded">
        <FontAwesomeIcon icon={faEdit} /> Edit
      </button>
      <button className="p-2 m-2 bg-red-500 text-white rounded">
        <FontAwesomeIcon icon={faTrash} /> Delete
      </button>
    </div>
  );
};

export default ContactDetails;
