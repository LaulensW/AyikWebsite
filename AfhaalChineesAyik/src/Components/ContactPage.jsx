import React from "react";
import "./ContactPage.css";

const ContactPage = () => {
    return (
    <>
<div class="contact-container">
    <div class="contact-info">
        <h2>Contact Info</h2>
        <ul>
            <li><strong>TelefoonNummer:</strong> 0251 - 213413</li>
            <li><strong>Address:</strong> Plantage 146, 1943 LR, Beverwijk, NL</li>
            <li><strong>Email:</strong> Ayik@outlook.nl</li>
        </ul>
    </div>
    <div class="contact-form">
        <h2>Contact Us</h2>
        <form>
            <div class="form-group">
                <input type="text" id="name" name="name" required />
                <label for="name">Naam</label>
            </div>
            <div class="form-group">
                <input type="email" id="email" name="email" required />
                <label for="email">Email</label>
            </div>
            <div class="form-group">
                <textarea id="description" name="description" rows="5" required></textarea>
                <label for="description">Bericht</label>
            </div>
            <button type="submit">Verstuur bericht</button>
        </form>
    </div>
</div>
<div class="map">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4858.867587809054!2d4.6478100771938005!3d52.48938677205317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5f08cad974cc5%3A0x22cb4d4219ca244!2sPlantage%20146%2C%201943%20LR%20Beverwijk!5e0!3m2!1snl!2snl!4v1711619753322!5m2!1snl!2snl" width="100%" height="450" style={{border:0}} allowfullscreen="" loading="lazy"></iframe>
</div>
    </>
    );
}

export default ContactPage;