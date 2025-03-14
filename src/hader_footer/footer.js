import react from "react";
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faPinterestP } from '@fortawesome/free-brands-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhoneFlip } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";



const Footer = () => {
    return (
        <footer>

            <div className="footer">
                <div className="footer-content">
                    {/* الجزء الأيسر */}
                    <div className="left">
                        <div className="Picsart_End"></div>
                        <p id="We">
                            We are happy to visit our site, choosing us indicates that we strive
                            to give you the best products at best prices...
                        </p>
                        <div className="social-icons">

                            <a href="https://www.facebook.com">  <FontAwesomeIcon icon={faFacebookF} id='foont' /></a>
                            <a href="https://www.instagram.com">  <FontAwesomeIcon icon={faInstagram} id='foont' /></a>
                            <a href="https://wa.me/+967778088098?text=Hi+Fares">  <FontAwesomeIcon icon={faWhatsapp} id='foont' /></a>
                            <a href="https://www.pinterest.com">  <FontAwesomeIcon icon={faPinterestP} id='foont' /></a>



                        </div>
                        <h3>Latest News</h3>

                        <strong style={{ fontSize: "1.5rem" }}>About:</strong><br />
                        <Link to="/about">|Follow us</Link><br />
                        <Link to="/">|See all news</Link><br />
                        <Link to="/product">|New projects</Link>


                    </div>

                    {/* الجزء الأيمن */}
                    <div className="right">
                        <h3 id="useful">Useful links</h3>
                        <div id="useful">

                            <Link to="/about" id="end">Reed</Link><br />
                            <a href="mailto:clash12345678990@gmail.com" id="end">Mial</a><br />
                            <Link to="/product" id="end">Order</Link><br />
                            <a id="end">See</a>
                        </div>
                        <h3 id="useful">Contact</h3>
                        <a id="end" href="https://wa.me/+967778088098?text=Hi+Fares">  <FontAwesomeIcon icon={faPhoneFlip} id='foont_1' />+967 778088098</a><br />
                        <a id="end" href="mailto:persol@gmail.com">  <FontAwesomeIcon icon={faEnvelope} id='foont_1' />parsoll@gmail.com</a><br />
                        <Link to="/Loc" id="end">  <FontAwesomeIcon icon={faLocationDot} id='foont_1' />60th Street - Behind the Long Mountain</Link>
                    </div>
                </div>
            </div>
            <div className="Rectangle_13"></div>
        </footer>
    );
};
export default Footer;