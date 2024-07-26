// src/components/Sidebar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button 
        onClick={() => setOpen(!open)} 
        className="bg-white text-green-700 p-2 rounded shadow hover:bg-green-800 hover:text-white transition duration-300"
      >
        Menu
      </button>
      {open && (
        <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-md py-2 w-48">
          <Link to="/results" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Results</Link>
          <Link to="/policy-summary" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Policy Summary</Link>
          <Link to="/report" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Report</Link>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
