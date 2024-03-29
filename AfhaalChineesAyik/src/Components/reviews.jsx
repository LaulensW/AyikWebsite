import React from "react";
import "./reviews.css";

const Reviews = () => {
    const reviewsData = [
        { name: "Aad Sanders", content: "Heerlijk gegeten grote bakken, alles goed heet .niets te klagen alleen wat aan de prijs", rating: 5 },
        { name: "Ruud Doets", content: "De loempia yik (speciaal) is mega groot en mega goed de rest van het eten is middelmatig tot een gore droge hap.", rating: 3 },
        { name: "Martijn vanderLans", content: "Eerste keer besteld; vriendelijk aan de telefoon, zeer snel bezorgd. Eten was erg lekker en goed warm. Zeer aanbevelingswaardig!", rating: 5},
        { name: "Angelique Lunemann", content: "Het eten is goed, wel veel duurder. Echt heel duur.", rating: 4}
    ];

    return (
        <div className="group-reviews">
            <h1>Reviews</h1>
            <div className="reviews-container">
                {reviewsData.map((review, index) => (
                    <div key={index} className="review-card">
                        <div className="name">{review.name}</div>
                        <div className="content">{review.content}</div>
                        <div className="rating">{review.rating} stars</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Reviews;