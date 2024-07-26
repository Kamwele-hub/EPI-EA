// src/components/Header.js
import React from 'react';
import MainNavbar from './MainNavbar';
import Sidebar from './Sidebar';

const Header = () => {
  return (
    <header className="bg-green-700 text-white py-4 px-6 flex justify-between items-center shadow-md">
      <h1 className="text-3xl font-bold">EPI East Africa</h1>
      <div className="flex items-center">
        <MainNavbar />
        <Sidebar />
      </div>
    </header>
  );
};

export default Header;
