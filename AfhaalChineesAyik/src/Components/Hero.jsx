import React from 'react';
import { Link } from 'react-router-dom';
import "./hero.css";

const Hero = () => {
    return (
    <section id='landing'>
        <div className="hero">
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