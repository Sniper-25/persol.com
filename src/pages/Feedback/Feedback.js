import React, { useState } from "react";
import Header from "../../hader_footer/header_feed";
import "./Feedback.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from "../../App";
import ContactUs from "../contact/contact";
import Footer from "../../hader_footer/footer";


const Feed = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Feedback submitted successfully!");
    setFormData({ name: "", email: "", phone: "", company: "", subject: "", message: "" });
  };
  

  return (
    <div>


      <div className="img1">

        <div className="depositphotos">
          <h1 className="feedback-title">Feedback</h1>
          <div className="Ellipse_1"></div>
          <div className="Ellipse_4"></div>
          <div className="Ellipse_5"></div>
        </div>



      </div>
      <div className="control">
        <div className="feedback-container">
          <p className="feedback-subtitle">Send your comments and your opinions to us</p>

          <div className="feedback-form-container">
            <form className="feedback-form" onSubmit={handleSubmit}>
              <input type="text" name="name" placeholder="Name" className="feedback-input" value={formData.name} onChange={handleChange} required />
              <input type="email" name="email" placeholder="Email" className="feedback-input" value={formData.email} onChange={handleChange} required />
              <input type="tel" name="phone" placeholder="Phone" className="feedback-input" value={formData.phone} onChange={handleChange} required />
              <input type="text" name="company" placeholder="Company Name" className="feedback-input" value={formData.company} onChange={handleChange} />
              <input type="text" name="subject" placeholder="Subject" className="feedback-input" value={formData.subject} onChange={handleChange} />
              <textarea name="message" placeholder="Message" className="feedback-textarea" value={formData.message} onChange={handleChange} required></textarea>
              <button type="submit" className="feedback-button">Send Message</button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Feed;