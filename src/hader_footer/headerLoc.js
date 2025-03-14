import react from "react";
import { Link } from 'react-router-dom';
import './header.css';


const HeaderLoc = () => {
  return (
    <header>
      <div className="Rectangle_4">
        <div className="persol-image"></div>
        <div className="Rectangle_44">

          <nav>
            <Link
              to="/home"
              style={{
                color: "rgba(17, 17, 17, 0.98)",
                fontWeight: "1000",
                fontSize: "1.2rem",
                marginLeft: "1.6rem",
                zIndex: "1",
              }}
            >
              Home
            </Link>

            <div className="Rectangle-5"></div>
            <div className="Line-23"></div>

            <Link to="/feed" id="icon">| Feedback </Link>
            <Link to="/product" id="icon">| Products </Link>
            <Link to="/about" id="icon">| About us </Link>
            <Link to="/contact" id="icon">| Contact</Link>

          </nav>
        </div>

        <Link to="/login">
          <div className="Rectangle-login">Login</div>
        </Link>

        <div className="Rectangle-43"></div>
      </div>

    </header>
  );
};

export default HeaderLoc;