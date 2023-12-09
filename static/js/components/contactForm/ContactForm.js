import React, { useState } from "react";
import { useFormik } from "formik";
import emailjs from "emailjs-com";
import "./contactForm.css";
import ModalNotification from "../modal/ModalNotification";

const ContactForm = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const formik = useFormik({
        initialValues: {
            firstName: "",
            email: "",
            phone: "",
            subject: "",
        },
        validate: (values) => {
            const errors = {};
            if (!values.firstName.trim()) {
                errors.firstName = "Please enter your first name.";
            }
            if (!values.email.trim()) {
                errors.email = "Please enter your email address.";
            } else if (!/\S+@\S+\.\S+/.test(values.email)) {
                errors.email = "Please enter a valid email address.";
            }
            if (!values.phone.trim()) {
                errors.phone = "Please enter your phone number.";
            } else if (!/^\d{10}$/.test(values.phone)) {
                errors.phone = "Please enter a 10-digit phone number.";
            }
            if (!values.subject.trim()) {
                errors.subject = "Please enter your question or message.";
            }
            return errors;
        },
        onSubmit: async (values, { resetForm }) => {
            console.log(values);
            try {
                const emailData = {
                    firstName: values.firstName,
                    email: values.email,
                    phone: values.phone,
                    subject: values.subject,
                };
                const response = await emailjs.send(
                    "service_oaoypra",
                    "template_aw5zf53",
                    emailData,
                    "-JzGgAut3Zqkq8vrp"
                );

                if (response.status === 200) {
                    setIsSubmitted(true);
                    resetForm();
                } else {
                    alert("Form submission failed.");
                }
            } catch (error) {
                console.error("Form submission error:", error);
                alert("Form submission failed.");
            }
        },
    });

    const closeModal = () => {
        setIsSubmitted(false);
    };

    return (
        <div className="contact-form-container">
            {isSubmitted ? (
                <ModalNotification
                    message="Submitted"
                    onClose={closeModal}
                />
            ) : (
                <div className="form-wrapper">
                    <form onSubmit={formik.handleSubmit} className="contact-form">
                        <h2 className="form-title">Contact Form</h2>
                        <p className="form-desc">
                            If you have any questions or queries about our services, please provide your details and we will get back to you.
                        </p>
                        <div className="form-group">
                            <label htmlFor="firstName">First Name</label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                placeholder="Your name.."
                                onBlur={formik.handleBlur}
                                {...formik.getFieldProps("firstName")}
                            />
                            {formik.touched.firstName && formik.errors.firstName && (
                                <div className="error-message">
                                    {formik.errors.firstName}
                                </div>
                            )}
                        </div>
                        {/* Other form fields */}
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Your email.."
                                onBlur={formik.handleBlur}
                                {...formik.getFieldProps("email")}
                            />
                            {formik.touched.email && formik.errors.email && (
                                <div className="error-message">
                                    {formik.errors.email}
                                </div>
                            )}
                        </div>
                        {/* Additional form fields */}
                        {/* ... */}
                        <div className="form-group">
                            <input type="submit" value="Submit" />
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
};

export default ContactForm;
