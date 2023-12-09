import React from "react";
import "./testimonial.css";
import reviews from "./TestimonialContent";

const Testimonial = () => {
    return (
        <div className="review">
            <div className="review-content">
                <h4 className="review-title">TESTIMONIALS</h4>
                <h2 className="review-subTitle">Our Successful Students</h2>
            </div>
            <div className="review-cardDeck">
                {reviews.map((review, index) => (
                    <div className="review-card" key={index}>
                        <div className="review-card-content">
                            <div className="review-card-icon">
                                <p className="review-card-cmt">
                                    <i className="fa-solid fa-quote-left"></i>
                                    {review.comment}
                                    <i className="fa-solid fa-quote-right"></i>
                                </p>
                            </div>
                            <div className="review-card-subcontent">
                                <p className="review-card-name">{review.name}</p>
                                <p className="review-card-cmn">{review.company}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonial;
