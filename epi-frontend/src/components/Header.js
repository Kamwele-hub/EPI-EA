import React from 'react';
import MainNavbar from './MainNavbar';
import Sidebar from './Sidebar';

const Header = () => {
  return (
    <header>
      <MainNavbar />
      <Sidebar />
    </header>
  );
};

export default Header;
