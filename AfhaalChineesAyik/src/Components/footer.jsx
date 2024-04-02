import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__section">
          <h4>Contact Us</h4>
          <p>Plantage 146, Beverwijk, Nederland</p>
          <p>Telefoonnummer: <a href="tel:+0251213413">0251 - 213413</a></p>
          <p>Email: <a href="mailto:Ayik@outlook.nl">Ayik@outlook.nl</a></p>
        </div>
        <div className="footer__section">
          <h4>Delivery Areas</h4>
          <ul>
            <li>Beverwijk</li>
            <li>Heemskerk</li>
            <li>Velsen-Noord</li>
          </ul>
        </div>
        <div className="footer__section">
          <h4>Opening Hours</h4>
          <p>Wednesday - Sunday: 16:00 - 21:00</p>
          <p>Delivery from 17:00 - 20:00</p>
        </div>
      </div>
      <div className="footer__copyright">
        <p>&copy; {new Date().getFullYear()} AfhaalChinees Ayik. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;