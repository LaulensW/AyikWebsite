import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css'
import logo from '..//assets/Logo.png'; // Adjust the path as necessary

const Navbar = () => {
    return (
      <div className='nav'>
        <div className="info-bar">
          <p>Tel: 0251 - 213413</p>
          <p>Plantage 146, Beverwijk - Open: Wo - Zo</p>
        </div>
        <nav className="navbar-container">
          <div className="navbar-left">
            <NavLink to="/" className="logo-link">
              <img src={logo} alt="Logo" className='logo'/>
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
      </div>
    );
  };
export default Navbar;