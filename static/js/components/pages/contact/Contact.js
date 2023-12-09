import React from "react";
import ContactForm from "../../contactForm/ContactForm";
import "./contact.css";

const Contact = () => {
    return (< React.Fragment >
        <div className="contact" >
            <div className="form" >
                <ContactForm />
            </div> </div> </React.Fragment>
    );
};

export default Contact;