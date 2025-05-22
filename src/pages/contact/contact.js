import React, { useState } from "react";
import "./contact.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneFlip } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import Footer from "../../hader_footer/footer";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div id="cb">


      <div className="contact-container">
        <h2>Contact Us</h2>
        <p>If you have any questions, feel free to reach out to us.</p>

        <div className="contact-info">

          <a  id="end" href="mailto:farisatif7780@gmail.com">  <FontAwesomeIcon icon={faEnvelope} id='foont_1' /><strong>Email : </strong>farisatif7780@gmail.com</a><br />




         <a href="https://wa.me/+967778088098?text=Hi+Fares" id="end">  <FontAwesomeIcon icon={faPhoneFlip} id='foont_1' /><strong>Phone : </strong>+967778088098</a><br />
         <a href="https://wa.me/+967773360830?text=Hi+abood issa" id="end">  <FontAwesomeIcon icon={faPhoneFlip} id='foont_1' /><strong>Phone : </strong>+967773360830</a><br />
         <a href="https://wa.me/+967772456877?text=Hi+abduisalam" id="end">  <FontAwesomeIcon icon={faPhoneFlip} id='foont_1' /><strong>Phone : </strong>+967772456877</a><br />
         <a href="https://wa.me/+967780248580?text=Hi+abdulkater" id="end">  <FontAwesomeIcon icon={faPhoneFlip} id='foont_1' /><strong>Phone : </strong>+967780248580</a><br />
         <a href="https://wa.me/+967781961964?text=Hi+Fakih" id="end">  <FontAwesomeIcon icon={faPhoneFlip} id='foont_1' /><strong>Phone : </strong>+967781961964</a><br />
         



          <h3 id="end"><a>  <FontAwesomeIcon icon={faLocationDot} id='foont_1' /><strong>Address : </strong></a>60th Street - Behind the Long Mountain</h3>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />

          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />

          <label>Message:</label>
          <textarea name="message" value={formData.message} onChange={handleChange} required></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
