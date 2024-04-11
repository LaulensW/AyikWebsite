import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer-container">
    <div className="footer">
        <div className="footer-heading-1">
            <h6 className="heading">ONZE WEBSITE</h6>
            <Link to="/Menu" className="link">Menu</Link>
            <Link to="/About" className="link">Over ons</Link>
        </div>

        <div className="footer-heading-2">
            <h6 className="heading">OPENINGSTIJDEN</h6>
            <p>Maandag: Gesloten</p>
            <p>Dinsdag: Gesloten</p>
            <p>Woensdag 16:00 - 21:00</p>
            <p>Donderdag 16:00 - 21:00</p>
            <p>Vrijdag 16:00 - 21:00</p>
            <p>Zatrerdag 16:00 - 21:00</p>
            <p>Zondag 16:00 - 21:00</p>
            <p>Bezorgen vanaf 17:00 - 20:00</p>  
        </div>

        <div className="footer-heading-3">
            <h6 className="heading">CONTACT</h6>
            <a href="#" className="link">Plantage 146, Beverwijk</a>
            <a href="#" className="link">Ayik@outlook.com</a>
            <a href="#" className="link">0251 - 213413</a>
            <br/>
        </div>
    </div>

    <div className="bottom-text">
        <p className="bottom-text-indi">©2024 Afhaalchinees Ayik</p>
        <Link to="/Privacy" className="bottom-text-indi">Privacy</Link>
    </div>
</div>
  );
}

export default Footer;