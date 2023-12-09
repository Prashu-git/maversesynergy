import React from "react";
import "./modalNotification.css";

const ModalNotification = ({ message, onClose }) => {
    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}>
                    &times; {/* Fixed typo here */}
                </span>
                <p>{message}</p>
            </div>
        </div>
    );
};

export default ModalNotification;
