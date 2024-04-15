import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import './NavBar.css'
import logo from '..//assets/Logo.png'; // Adjust the path as necessary

const Navbar = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
      <div className='nav'>
        <div className="info-bar">
          <a href="tel:0251 213413"><p>Tel: 0251 - 213413</p></a>
          <a href="https://maps.app.goo.gl/jHbwBG5DhFi86xmGA"><p>Plantage 146, Beverwijk - Open: Wo - Zo</p></a>
        </div>
        <nav className="navbar-container">
          <div className="navbar-left">
            <NavLink to="/" className="logo-link">
              <img src={logo} alt="Logo" className='logo'/>
            </NavLink>
          </div>
          {isMobile ? (
            <div className="navbar-right-mobile">
              <button onClick={toggleMenu}>☰</button>
              {isOpen && (
                <div className="mobile-menu">
                  <NavLink to="/" className="nav-button">HOME</NavLink>
                  <NavLink to="/menu" className="nav-button">MENU</NavLink>
                  <NavLink to="/about" className="nav-button">OVER ONS</NavLink>
                  <NavLink to="/Contact" className="nav-button">
                    CONTACT
                  </NavLink>
                </div>
              )}
            </div>
          ) : (
            <div className="navbar-right">
              <NavLink to="/" className="nav-button">HOME</NavLink>
              <NavLink to="/menu" className="nav-button">MENU</NavLink>
              <NavLink to="/about" className="nav-button">OVER ONS</NavLink>
              <NavLink to="/Contact" className="nav-button">
                CONTACT
              </NavLink>
            </div>
          )}
        </nav>
      </div>
    );
  };
export default Navbar; /* components/Navbar.css */