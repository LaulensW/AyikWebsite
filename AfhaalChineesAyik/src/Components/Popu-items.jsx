import React from "react";
import "./Popu-items.css";


const PopuItems = () => {
  return (
    <>
      <section className="popu-items">
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