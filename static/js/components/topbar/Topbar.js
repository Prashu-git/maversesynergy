import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./topbar.css";

const Topbar = () => {
    const [showList, setShowList] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const toggleList = () => {
        setShowList(!showList);
    };

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
            setShowList(false); // Close dropdown on resize
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const navLinks = [
        { to: "/", label: "Home" },
        { to: "/about", label: "About us" },
        { to: "/courses", label: "Courses" },
        { to: "/contact", label: "Contact us" },
    ];

    return (
        <div className="topbar">
            <div className="topbar-left">
                <img
                    src="./images/Clout.jpg"
                    alt="logo"
                    style={{ width: "25px", marginRight: "10px" }}
                />
                <h1 className="topbar-title">MAVERSE SYNERGY</h1>
            </div>
            <div className="topbar-right">
                {windowWidth <= 768 ? (
                    <div className="topbar-dropdown-toggle" onClick={toggleList}>
                        <i className="dropdown-symbol fa fa-bars" aria-hidden="true"></i>
                    </div>
                ) : (
                    <ul className="topbar-list">
                        {navLinks.map((link, index) => (
                            <li className="topbar-list-item" key={index}>
                                <Link to={link.to} style={{ textDecoration: "none", color: "inherit" }}>
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                )}
                {showList && (
                    <ul className="topbar-list" onClick={toggleList}>
                        {navLinks.map((link, index) => (
                            <li className="topbar-list-item" key={index}>
                                <Link to={link.to} style={{ textDecoration: "none", color: "inherit" }}>
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default Topbar;
