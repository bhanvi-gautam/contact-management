// App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Contacts from './components/Contacts';
import ContactForm from './features/contacts/ContactForm';
import { useSelector } from 'react-redux';
import { RootState } from './app/store';
import EditContact from './features/contacts/EditContact';

const App: React.FC = () => {
  const contacts = useSelector((state: RootState) => state.contacts.contacts);

  return (
   
<>
  <div className="flex mb-4 min-h-screen">
    <Router>
      <div className="w-1/2 h-full">
        <Sidebar />
      </div>
      <div className="w-1/2 h-full">
         <Routes>
          <Route path="/" element={<Contacts />} />
          <Route path="/createContact" element={<ContactForm />} />
          <Route path="/editContact/:id" element={<EditContact />} />
        </Routes>
      </div> 
    </Router>
  </div>
</>

  );
};

export default App;
