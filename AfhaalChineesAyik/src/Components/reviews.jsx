import React, { useEffect } from "react";
import "./reviews.css";
import starImage from "../assets/star.svg"; // Import your star image here
import AOS from 'aos';
import 'aos/dist/aos.css';

const Reviews = () => {
    useEffect(() => {
        AOS.init({
            duration: 700, // Duration of the animation
            offset: 200, // Offset (in pixels) from the bottom of the screen
            easing: 'ease-in-out', // Easing type
            delay: 200, // Delay (in milliseconds) before the animation starts
            once: true // Only animate once
        });
    }, []);

    const reviewsData = [
        { name: "Aad Sanders", content: "Heerlijk gegeten grote bakken, alles goed heet .niets te klagen alleen wat aan de prijs", rating: 5 },
        { name: "George", content: "Ik kreeg de plaats aanbevolen door een vriend en werd niet teleurgesteld. De verhouding prijs, kwantiteit en kwaliteit is voor mij het beste", rating: 5 },
        { name: "Martijn vanderLans", content: "Eerste keer besteld; vriendelijk aan de telefoon, zeer snel bezorgd. Eten was erg lekker en goed warm. Zeer aanbevelingswaardig!", rating: 5},
        { name: "Angelique Lunemann", content: "Het eten is goed, wel veel duurder. Echt heel duur.", rating: 4}
    ];

    const renderStars = (rating) => {
        const stars = [];
        for (let i = 0; i < rating; i++) {
            stars.push(<img key={i} src={starImage} alt="star" className="star" />);
        }
        return stars;
    };

    return (
        <div className="group-reviews">
            <h1 className="head-reviews">Reviews</h1>
            <div className="reviews-container" data-aos="fade-up">
                {reviewsData.map((review, index) => (
                    <div key={index} className="review-card">
                        <div className="name">{review.name}</div>
                        <div className="content">{review.content}</div>
                        <div className="rating">
                            {renderStars(review.rating)}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Reviews;
