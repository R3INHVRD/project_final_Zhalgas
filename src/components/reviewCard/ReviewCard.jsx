import React from "react";
import "./ReviewCard.css";

const ReviewCard = ({ author, comment, rating, avatarUrl }) => {
    return (
        <div className="review-card">
            <div className="review-header">
                <div className="review-avatar">
                    <img src={avatarUrl} alt={`${author}'s avatar`} />
                </div>
                <div className="review-author">{author}</div>
            </div>
            <div className={rating >= 3 ? "review-rating-positive" : "review-rating-negative"}>Rating: {rating}/5</div>
            <div className="review-comment">{comment}</div>
        </div>
    );
};

export default ReviewCard;