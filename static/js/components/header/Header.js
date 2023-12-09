import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

function Header({ subtitle, title, content }) {
    return (
        <div>
            <div className="header">
                <div className="header-content">
                    <p style={{ marginBottom: "10px" }}>{subtitle}</p>
                    <h1 className="header-title">{title}</h1>
                    <p>{content}</p>
                    <Link to="/about">
                        <button>Learn More</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Header;
