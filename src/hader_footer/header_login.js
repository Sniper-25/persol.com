import react from "react";
import { Link } from 'react-router-dom';
import './header.css';


const HeaderLog = () => {
  return (
    <header>
      <div className="Rectangle_4">
        <div className="persol-image"></div>
        <div className="Rectangle_44"style={{marginLeft:"1.3rem"}}>

          <nav>
            <Link to="/login" style={{
              color: " rgba(17, 17, 17, 0.98)8)",
              fontWeight: " 1000",
              fontSize: "1.2rem",
              marginLeft: "1.6rem",
              zIndex: "1"
            }}> <i>Login</i> </Link>

            <div className="Rectangle-5"></div>
            <div className="Line-23"></div>

            <Link to="/feed" id="icon">| Feedback </Link>
            <Link to="/" id="icon">| Home </Link>
            <Link to="/about" id="icon">| About us </Link>
            <Link to="/contact" id="icon">| Contact</Link>
            <Link to="/product" id="icon" >| Product</Link>
          </nav>
        </div>

        <div className="Rectangle-43"></div>
      </div>

    </header>
  );
};

export default HeaderLog;