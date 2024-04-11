import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./hero.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
  const [animationTriggered, setAnimationTriggered] = useState(false);

  useEffect(() => {
    if (!animationTriggered) {
      AOS.init({
        duration: 800, // Duration of the animation
        offset: 200, // Offset (in pixels) from the bottom of the screen
        easing: 'ease-in-out', // Easing type
        delay: 200, // Delay (in milliseconds) before the animation starts
      });
      setAnimationTriggered(true);
    }
  }, [animationTriggered]);

  return (
    <section id='landing'>
        <div className={animationTriggered ? "hero" : "hero no-fade"} data-aos={animationTriggered ? "" : "fade-up"}>
            <div className="hero-text">
                <h1>Welkom bij Afhaalchinees Ayik</h1>
                <p>De lekkerste gerechten van de beste kwaliteit</p>
                <Link to="/menu">
                    <button>Menu</button>
                </Link>
            </div>
        </div>
    </section>
  );
}

export default Hero;
