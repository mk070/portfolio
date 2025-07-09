import React, { useState } from "react";
import { RiMailLine, RiMailOpenLine,RiMessage2Fill } from "@remixicon/react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [responseMessage, setResponseMessage] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
            .send(
                "service_eni1x1a", // Replace with your EmailJS service ID
                "template_iolb4yp", // Replace with your EmailJS template ID
                formData,
                "Wui-f5TkXAsWefwaF" // Replace with your EmailJS public key
            )
            .then(
                (result) => {
                    console.log("Email sent successfully:", result.text);
                    setResponseMessage("Your message has been sent successfully!");
                    setFormData({ name: "", email: "", message: "" }); // Reset form
                },
                (error) => {
                    console.error("Error sending email:", error);
                    setResponseMessage("There was an error sending your message. Please try again.");
                }
            );
    };

    return (
        <section id="contact" className="md:px-44 contact-area">
            <div className="container">
                <div className="container-inner">
                    <div className="row">
                        <div className="col-lg-12">
                            <ul className="extra-skills wow fadeInUp delay-0-2s pb-30">
                                <li >
                                    <a className="flex flex-row  justify-center items-center p-1" href="mailto:madhanp722@gmail.com">
                                        <i>
                                            <RiMailOpenLine size={16} />
                                        </i>
                                        Email: madhanp722@gmail.com
                                    </a>
                                </li>
                                <li>
                                    <a className="flex flex-row justify-center items-center p-1" href="https://wa.me/6381863055" target="_blank" rel="noopener noreferrer">
                                        <i>
                                            <RiMessage2Fill size={16} />
                                        </i>
                                        WhatsApp: +91 6381863055
                                    </a>
                                </li>
                            </ul>
                            <div className="contact-form contact-form-area wow fadeInUp delay-0-4s">
                                <form id="contactForm" className="contactForm" onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="name">Full Name</label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    className="form-control"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    placeholder="Steve Milner"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="email">Email Address</label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    className="form-control"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    placeholder="hello@websitename.com"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label htmlFor="message">Your Message</label>
                                                <textarea
                                                    name="message"
                                                    id="message"
                                                    className="form-control"
                                                    rows="4"
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    placeholder="Write your message"
                                                    required
                                                ></textarea>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group mb-0">
                                                <button type="submit" className="flex items-center gap-2 theme-btn">
                                                    Send Me Message{" "}
                                                    <i>
                                                        <RiMailLine size={16} />
                                                    </i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                {responseMessage && <p className="response-message">{responseMessage}</p>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
