import React, { useEffect } from "react";
import "./Popu-items.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

const PopuItems = () => {
  useEffect(() => {
    AOS.init({
      duration: 700, // Duration of the animation
      offset: 200, // Offset (in pixels) from the bottom of the screen
      easing: 'ease-in-out', // Easing type
      delay: 200, // Delay (in milliseconds) before the animation starts
      once: true // Only animate once
    });
  }, []);

  return (
    <>
      <section className="popu-items" data-aos="fade-up">
        <div className="popu-items__image">
          <img src="image-url" alt="Food Image" />
        </div>
        <div className="popu-items__content">
          <h2>Welkom bij Afhaalchinees Ayik!</h2>
          <p>Bij Afhaalchinees Ayik bieden we heerlijke gerechten uit de authentieke Chinese keuken die zowel bezorgd kunnen worden als afgehaald. Ontdek een wereld van smaken en geniet van onze verse en smaakvolle maaltijden, rechtstreeks bij jou thuis bezorgd of klaar om op te halen.</p>
          <p>Wacht niet langer en plaats nu je bestelling voor een culinaire reis door China! Of kom gezellig langs en haal je favoriete gerechten op om thuis van te genieten.</p>
          <button>Bestel Nu!</button>
        </div>
      </section>
    </>
  );
}

export default PopuItems;