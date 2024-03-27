import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css'

const Navbar = () => {
    return (
      <nav className="navbar-container">
        <div className="navbar-left">
          <NavLink to="/" className="logo-link">
          </NavLink>
        </div>
        <div className="navbar-right">
          <NavLink to="/" className="nav-button">HOME</NavLink>
          <NavLink to="/menu" className="nav-button">MENU</NavLink>
          <NavLink to="/about" className="nav-button">OVER ONS</NavLink>
          <NavLink to="/Contact" className="nav-button">
            CONTACT
        </NavLink>
        </div>
      </nav>
    );
  };
export default Navbar;