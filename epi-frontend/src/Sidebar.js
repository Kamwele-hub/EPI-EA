import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <button className="sidebar-toggle">Menu</button>
      <nav className="sidebar-nav">
        <ul>
          <li><Link to="/results">Results</Link></li>
          <li><Link to="/policy-summary">Policy Summary</Link></li>
          <li><Link to="/report">Report</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
