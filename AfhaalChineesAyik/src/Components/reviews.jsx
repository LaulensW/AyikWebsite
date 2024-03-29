import React from "react";
import "./reviews.css";
import starImage from "../assets/star.svg"; // Import your star image here

const Reviews = () => {
    const reviewsData = [
        { name: "Aad Sanders", content: "Heerlijk gegeten grote bakken, alles goed heet .niets te klagen alleen wat aan de prijs", rating: 5 },
        { name: "Ruud Doets", content: "De loempia yik (speciaal) is mega groot en mega goed de rest van het eten is middelmatig tot een gore droge hap.", rating: 3 },
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
            <div className="reviews-container">
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
