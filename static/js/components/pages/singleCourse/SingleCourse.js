import React from "react";
import "./singleCourse.css";
import courseDetail from "./courseDetail";
import { useParams } from "react-router-dom";

const SingleCourse = () => {
    const { id } = useParams();
    const selectedCourse = courseDetail.find((course) => course.id === id);

    if (!selectedCourse) {
        return <div>Course not found</div>;
    }

    return (
        <div className="course-detail">
            <h2 className="course-title">{selectedCourse.title}</h2>
            <div className="course-desc-container">
                <p className="course-desc">{selectedCourse.description}</p>
            </div>
            <h4 className="syl-title">{selectedCourse.syllabusTitle}</h4>
            <ul className="course-chapter">
                {selectedCourse.syllabus.map((chapter) => (
                    <li key={chapter.id}>{chapter.title}</li>
                ))}
            </ul>
            {/* <p className="course-tech">Instructor: {selectedCourse.instructor}</p>
            <p className="course-dur">Duration: {selectedCourse.duration}</p> */}
        </div>
    );
};

export default SingleCourse;
