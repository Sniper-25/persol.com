import React, { useState } from "react";
import "./Register.css";
import Header from "../../hader_footer/header_login";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import Footer from "../../hader_footer/footer";


const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleRegister = () => {
    console.log("Registering with:", username, password, email);
    // Add your registration logic here
  };

  const handleForgotPassword = () => {
    console.log("Redirecting to password reset...");
    // Add navigation logic here
  };

  const handleSignUp = () => {
    console.log("Redirecting to sign-up...");
    // Add sign-up logic here
  };

  return (
    <div>

      <div className="control">
        <div className="login-container">
          <h1 className="login-title">
            Register
            <div className="ellipse ellipse-1"></div>
            <div className="ellipse ellipse-2"></div>
          </h1>
          <div>  <FontAwesomeIcon icon={faUser} id='foont' /></div>

          <input
            type="text"
            className="input-box"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <div>  <FontAwesomeIcon icon={faLock} id='foont' /></div>

          <input
            type="password"
            className="input-box"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div>  <FontAwesomeIcon icon={faEnvelope} id='foont' /></div>
          <input
            type="email"
            className="input-box"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button className="login-button" onClick={handleRegister}>
            Register
          </button>

         

          <div className="or-section">
            <div className="line"></div>
            <span>OR</span>
            <div className="line"></div>
          </div>
          <Link to="/login">
            <button className="create-account" onClick={handleSignUp}>
              Sign up?
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Register;