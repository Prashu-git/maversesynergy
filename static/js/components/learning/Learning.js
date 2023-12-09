import React from "react";
import "./learning.css";
import contents from "./contents";

const Learning = () => {
    return (
        <div className="learning">
            <div className="learning-img">
                <div
                    className="limage"
                    style={{
                        backgroundImage: "url('./images/learning.webp')",
                    }}
                ></div>
            </div>

            <div className="learning-content">
                <div className="learning-heading">
                    <h4 className="learning-title">PATHWAY TO LEARNING</h4>
                    <h2 className="learning-subTitle">
                        The Advantages of Learning From Our Experience
                    </h2>
                </div>

                <div className="learning-card-deck">
                    {contents.map((content, index) => (
                        <div className="learning-card" key={index}>
                            <div className="learning-card-content">
                                <div className="learning-card-icon">
                                    <i className={content.icon}></i>
                                </div>
                                <div className="learning-card-subcontent">
                                    <h2 className="learning-card-title">
                                        {content.title}
                                    </h2>
                                    <p className="learning-card-desc">
                                        {content.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Learning;
