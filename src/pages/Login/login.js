import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Footer from "../../hader_footer/footer";
import { faLock } from '@fortawesome/free-solid-svg-icons';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Logging in with:", username, password);

  };

  const handleCreateAccount = () => {
    console.log("Redirecting to account creation...");

  };

  const handleForgotPassword = () => {
    console.log("Redirecting to password reset...");

  };

  return (
    <div>

      <div className="control">
        <div className="login-container">
          <h1 className="login-title">
            Login
            <div className="ellipse ellipse-1"></div>
            <div className="ellipse ellipse-2"></div>
          </h1>
          <h4>Hello,Welcom back</h4>
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

          <button className="login-button" onClick={handleLogin}>
            Login
          </button>

          <Link to="/for" href="#" className="forgot-password" onClick={handleForgotPassword}>
            Forgot Password?
          </Link>

          <div className="or-section">
            <div className="line"></div>
            <span>OR</span>
            <div className="line"></div>
          </div>

          <Link to="/re">  <button className="create-account" onClick={handleCreateAccount}>
            Create an account
          </button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;