import React from 'react';
import "./AboutPage.css";
import kok from '..//assets/kok.jpg';

const About = () => {
    return (
        <div class="about_us_all_content_div">
            <div class="about_us_container">
  
                <div>
                    <h1 class="title_about_us">Over ons</h1>
                    <p class="text_about_us">Al sinds 1992 staat Chinees Afhaalcentrum A Yik bekend om haar authentieke Chinese gerechten in Beverwijk en omgeving.
                    Eigenaar Fu Yin Yik bewaakt de kwaliteit van de keuken.
                    Hij begon zijn carrière als kok al op zeer jonge leeftijd. Zijn eerste werkervaring in de Chinese keuken begon toen hij als 14 jarige jongen in Hong Kong onder leiding van een Chef kok de fijne kneepjes van het vak leerde.
                    Hij had in Hong Kong bij meerdere restaurants als chef Kok gewerkt en in Nederland bij onder andere de Sea Palace in Amsterdam en Jasmin Garden in Castricum.
                    In 1992 heeft hij zijn droom verwezenlijkt en opende zijn eigen afhaalcentrum. Hierdoor kan hij zijn passie voor de authentieke Chinese keuken, met name zijn eigen A Yik gerechten, met een bredere publiek delen.
                    Om nog meer mensen kennis te kunnen laten maken met deze authentieke Chinese keuken, is hij de eerste afhaalcentrum in de IJmond die met succes de bezorgdienst heeft geïntroduceerd sinds 1994.</p>
                    <p class="text_about_us"><b>Beverwijk - Heemskerk - Velsen Noord (bezorgdienst van 17.00 - 20.00 uur )</b></p>
                </div>   
                    <img src={kok} alt="kok" class='kok'/>

            </div>
        </div>
    );
}

export default About;