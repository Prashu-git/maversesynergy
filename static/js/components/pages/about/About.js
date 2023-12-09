import React from 'react';
import AcademyInfo from '../../academyInfo/AcademyInfo';
import Header from '../../header/Header';
import Learning from '../../learning/Learning';
import Testimonial from '../../testimonial/Testimonial';

const About = () => {
    return (
        <div>
            <Header
                title="Maverse Synergy Info"
                subtitle="MAVERSE SYNERGY IN RAJAJINAGAR BANGALORE"
                content="Maverse Synergy is a leading training centre for Cad design, Graphic design, Video Editing, Hardware Training, Chartered Account Training, and Digital Marketing services"
            />
            <Learning />
            <AcademyInfo />
            <Testimonial />
        </div>
    );
};

export default About;
