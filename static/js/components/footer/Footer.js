import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

function Footer() {
    return (
        <div className="footer">
            <div className="quick-links">
                <h2 style={{ color: "#00ADB5" }}>MAVERSE SYNERGY</h2>
                <p>Your Path to Professional Success!</p>
                <div className="social-media-links">
                    <a href="https://www.facebook.com/maversesynergy/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook"></i>
                    </a>
                    <a href="https://twitter.com/i/flow/login?redirect_after_login=%2FCloutBizzLtd" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="https://www.instagram.com/maversesynergy/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-youtube"></i>
                    </a>
                </div>
            </div>

            <div className="company">
                <h2>Company</h2>
                <ul>
                    <li><Link to="/" style={{ textDecoration: "none", color: "inherit" }}>Home</Link></li>
                    <li><Link to="/about" style={{ textDecoration: "none", color: "inherit" }}>About us</Link></li>
                    <li><Link to="/courses" style={{ textDecoration: "none", color: "inherit" }}>Courses</Link></li>
                    <li><Link to="/contact" style={{ textDecoration: "none", color: "inherit" }}>Contact us</Link></li>
                </ul>
            </div>

            {/* <div className="corporate-office">
                <div className="new-column">
                    <h2>  </h2>
                    <ul>
                    <li><Link to="/" style={{ textDecoration: "none", color: "inherit" }}>Home</Link></li>
                    <li><Link to="/" style={{ textDecoration: "none", color: "inherit" }}>Home</Link></li>
                    <li><Link to="/" style={{ textDecoration: "none", color: "inherit" }}>Home</Link></li>                    <li><Link to="/" style={{ textDecoration: "none", color: "inherit" }}>Home</Link></li>
                    <li><Link to="/" style={{ textDecoration: "none", color: "inherit" }}>Home</Link></li>
                    </ul>
                </div> */}

                <h2>Company Address</h2>
                <p>
                    1007 / 48, 2nd floor, Vensor Plaza, Dr rajkumar Rd, Bengaluru,
                    Karnataka - 560010
                </p>
                <em>Email: cloutgroups@gmail.com</em> <br/>
                <em>Phone number: 9845007300</em>
            </div>
        
    );
}

export default Footer;
