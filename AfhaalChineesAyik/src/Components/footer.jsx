// Footer.js
import logo from '..//assets/Logo.png';
import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__section">
          <div className="footer__logo">
            <img src={logo} alt="Restaurant Logo" />
            <h3>AfhaalChinees Ayik</h3>
          </div>
          <div className="footer__info">
            <p>Plantage 146, Beverwijk, Nederland</p>
            <p>Telefoonnummer: <a href="tel:+0251213413">0251 - 213413</a></p>
            <p>Email: <a href="mailto:Ayik@outlook.nl">Ayik@outlook.nl</a></p>
          </div>
        </div>
        <div className="footer__section">
          <div className="footer__delivery">
            <h4>Bezorggebieden</h4>
            <ul>
              <li>Beverwijk</li>
              <li>Heemskerk</li>
              <li>Velsen-Noord</li>
            </ul>
          </div>
          <div className="footer__hours">
            <h4>Openingstijden</h4>
            <p>Woensdag - Zondag: 16:00 - 21:00</p>
            <p>Bezorgen vanaf 17:00 - 20:00</p>
          </div>
        </div>
      </div>
      <div className="footer__copyright">
        <p>&copy; {new Date().getFullYear()} AfhaalChinees Ayik. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
