import React from 'react';
import { Link } from 'react-router-dom';

const MainNavbar = () => {
  return (
    <nav className="main-navbar">
      <ul>
        <li><Link to="/data-sources">Data Sources</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </nav>
  );
};

export default MainNavbar;
