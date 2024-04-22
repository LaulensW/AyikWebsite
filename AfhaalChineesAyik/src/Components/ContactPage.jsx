import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./ContactPage.css";

const ContactPage = () => {
    const form = useRef();

    // Functie om e-mails te verzenden
  const sendEmail = (e) => {
    e.preventDefault();
  
      // Gebruikt de emailjs Lib om de formuliergegevens te verzenden
    emailjs.sendForm('service_pk6i4vb', 'template_zsb07pr', form.current, 'dToLWCvJTiCrpOg00')
    .then((result) => {
      console.log(result.text);
      form.current.reset();
      alert('Message sent successfully!');
    })
    .catch((error) => {
      console.log(error.text);
      alert('Message failed to send. Please try again.');
    });
  };
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
        <form ref={form} onSubmit={sendEmail}>
            <div class="form-group">
                <input type="text" id="name" name="user_name" required style={{fontSize: '16px'}}/>
                <label for="name">Naam</label>
            </div>
            <div class="form-group">
                <input type="email" id="email" name="user_email" required style={{fontSize: '16px'}}/>
                <label for="email">Email</label>
            </div>
            <div class="form-group">
                <textarea id="message" name="message" rows="5" required style={{fontSize: '16px'}}></textarea>
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