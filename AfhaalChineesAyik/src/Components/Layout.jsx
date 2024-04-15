import React, { useEffect } from 'react';
import Navbar from './NavBar';
import './Layout.css';

const Layout = ({ children }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar />
      <div className="layout-container">{children}</div>
    </div>
  );
};

export default Layout;