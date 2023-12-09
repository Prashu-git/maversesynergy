import React from "react";
import "./coursedeck.css";
import copies from "./courseContent";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const Coursedeck = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="coursedeck">
            <div className="coursedeck-content">
                <h4 className="coursedeck-title">OUR COURSES</h4>
                <h2 className="coursedeck-subTitle">Explore Our Popular Courses</h2>
            </div>

            <Slider {...settings}>
                {copies.map((course) => (
                    <div className="coursedeck-card" key={course.id}>
                        <div className="coursedeck-card-content">
                            <img src={course.imgSrc} alt={course.imgName} className="coursedeck-card-img" />
                            <h2 className="coursedeck-card-title">{course.title}</h2>
                            {/* <p className="coursedeck-card-dur">Duration: {course.desc}</p> */}
                            <Link to={`/singleCourse/${course.id}`} style={{ textDecoration: "none", color: "inherit" }}>
                                {/* <button className="coursedeck-card-btn">Learn more</button> */}
                            </Link>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Coursedeck;
