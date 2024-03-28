import React from 'react';
import Navbar from './NavBar';
import './Layout.css';

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="layout-container">{children}</div>
    </div>
  );
};

export default Layout;