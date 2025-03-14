import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Footer from "../../hader_footer/footer";

const LoginFor = () => {
  const [formData, setFormData] = useState({
    email: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };



  const handleSubmit = (e) => {
    e.preventDefault();


        if (!formData.email.trim()){
      alert("Please Enter Your Email !");
      return;
    }
    alert("Check Your Email !!");
    setFormData({ email: ""});
  };

  return (
    <div>

      <div className="control">
        <div className="login-container">
          <h3></h3>
          <h1 className="login-title">
          <div>  <FontAwesomeIcon icon={faUser} size="2x" /></div>

          </h1>

              <input type="email" name="email" placeholder="Enter Your Eimal" className="input-box" value={formData.email} onChange={handleChange} required />
         

          <button type="submit" className="login-button" onClick={handleSubmit}>
            Send
          </button>


          <div className="or-section">
            <div className="line"></div>
            <span>OR</span>
            <div className="line"></div>
          </div>

          <Link to="/login">  <button className="create-account">
           Back to Login
          </button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LoginFor;