import React from "react";
import "./courses.css";
import copies from "./courseContent";
import { Link } from "react-router-dom";

const Courses = () => {
    const handleClick = (data) => {
        console.log(data);
    };

    return (
        <div className="courses">
            {copies.map((course) => (
                <div className="courses-card" key={course.id}>
                    <div className="courses-card-content">
                        <img src={course.imgSrc} alt="" className="courses-card-img" />
                        <h2 className="courses-card-title">{course.title}</h2>
                        {/* <p className="courses-card-dur">Duration: {course.desc}</p> */}

                        <Link
                            to={`/singleCourse/${course.id}`}
                            style={{ textDecoration: "none", color: "inherit" }}
                        >
                            <button
                                className="courses-card-btn"
                                onClick={() => handleClick(course)}
                            >
                                Learn more
                            </button>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Courses;
