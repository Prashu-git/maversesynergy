import React from "react";
import "./home.css";
import Header from "../../header/Header";
import Learning from "../../learning/Learning";
import Coursedeck from "../../coursedeck/Coursedeck";
import Testimonial from "../../testimonial/Testimonial";

const Home = () => {
    return (<div className="home" >
        <Header title="The Road to Professional Success!"
            subtitle="WELCOME TO  MAVERSE SYNERGY"
            content="Our courses are designed to provide you with the skills and information you need to thrive in today's fast-paced digital environment. Join our learning community now to realize your full potential!" />
        <Learning />
        <Coursedeck />
        <Testimonial />
    </div>
    );
};

export default Home;