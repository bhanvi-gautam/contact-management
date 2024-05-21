
import React, { useState } from 'react';
import { Contact } from './types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { deleteContact } from './ContactsSlice';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

interface Props {
  data: Contact;
}

const ContactDetails: React.FC<Props> = ({ data }) => {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const [idToBeEdited,setIdToBeEdited]=useState<string|undefined>();
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [idToBeDeleted,setIdToBeDeleted]= useState<string | undefined>();

  const handleDelete=()=>{
    if (idToBeDeleted) {
      dispatch(deleteContact(idToBeDeleted));
      console.log(`Deleting contact with ID: ${idToBeDeleted}`);
      setShowDeleteConfirmation(false);
    }
  }
  const handleEdit=()=>{
    if(idToBeEdited){
      navigate(`/editContact/${idToBeEdited}`)
    }
  }
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
      <Link to={`/editContact/${data.id}`}><button className="p-2 m-2 bg-blue-500 text-white rounded">
        <FontAwesomeIcon icon={faEdit} /> Edit
      </button></Link>
      <button className="p-2 m-2 bg-red-500 text-white rounded" onClick={()=>{setIdToBeDeleted(data.id); setShowDeleteConfirmation(true); }}>
        <FontAwesomeIcon icon={faTrash} /> Delete
      </button>
      {showDeleteConfirmation && (
        <div className="fixed inset-0 z-10 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-lg text-gray-900">Are you sure you want to delete this contact?</p>
            <div className="mt-4 flex justify-center">
              <button className="bg-red-500 text-white px-4 py-2 rounded mr-2" onClick={handleDelete}>Yes</button>
              <button className="bg-gray-500 text-white px-4 py-2 rounded" onClick={() => setShowDeleteConfirmation(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactDetails;
