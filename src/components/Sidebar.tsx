// Sidebar.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
  return (
    <div className="flex flex-col h-full bg-gray-200 w-1/4">
      <nav className="py-4">
        <ul>
          <li className="mb-2">
            <Link to="/contacts" className="text-blue-600 hover:text-blue-800">Contacts</Link>
          </li>
          <li className="mb-2">
            <Link to="/charts-and-maps" className="text-blue-600 hover:text-blue-800">Charts & Maps</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
