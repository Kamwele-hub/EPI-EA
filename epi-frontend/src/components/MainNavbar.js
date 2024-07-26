// src/components/MainNavbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const MainNavbar = () => {
  return (
    <nav className="flex space-x-4">
      <Link to="/" className="hover:underline hover:text-yellow-400 transition duration-300">Home</Link>
      <Link to="/data-sources" className="hover:underline hover:text-yellow-400 transition duration-300">Data Sources</Link>
      <Link to="/contact" className="hover:underline hover:text-yellow-400 transition duration-300">Contact Info</Link>
      <Link to="/about" className="hover:underline hover:text-yellow-400 transition duration-300">About</Link>
    </nav>
  );
};

export default MainNavbar;
