import React from "react";
import './Loc.css';
import Footer from "../../hader_footer/footer";

const OfficeSection = ({ title, location, phone, email }) => (
  <div className="office-section">
    <h5>{title}</h5>
    <section>
      <p>{location}</p>
      <p>
        <a href={`https://wa.me/+967778088098?text=Hi+Fares`} target="_blank" style={{ color: 'black' }}>
          {phone}
        </a>
      </p>
      <a href={`mailto:${email}`} target="_blank" style={{ textDecoration: 'none', color: 'black' }}>
        {email}
      </a>
    </section>
  </div>
);

const Loc = () => {
  return (
    <div>

      <div className="body">
        <div className="whole">
          <center>
            <article className="contact">
              <div className="location-header">
                <h4>Location</h4>
              </div>
              <div className="map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16697418.71932186!2d37.79887474883809!3d11.99491214205749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1603dbd54684f731%3A0xa46b957a1482ac73!2sSana&#39;a%2C%20Yemen!5e0!3m2!1sen!2s!4v1741798368718!5m2!1sen!2s"
                  style={{ border: 0 }}
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  width="97.6%"
                  height="350"
                  loading="lazy"
                ></iframe>
              </div>
            </article>
          </center>
          <div>
            <article className="office">
              <div className="office-header">
                <h4>Our offices</h4>
              </div>
              <OfficeSection
                title="S Main St Address"
                location="S Main Streat, Hadih streat, Sana'a"
                phone="+967778088098"
                email="farisatif7780@gmail.com"
              />
              
              
              
            </article>

            <article className="business-hours">
              <div className="hours-header">
                <h4>Business Hours</h4>
              </div>
              <section className="hours-section">
                <p>
                  <span>Mon</span> 08:00 AM - 08:00 PM
                </p>
                <p>
                  <span>Tues</span> 08:00 AM - 08:00 PM
                </p>
                <p>
                  <span>Wed</span> 08:00 AM - 08:00 PM
                </p>
                <p>
                  <span>Thurs</span> 08:00 AM - 08:00 PM
                </p>
                <p>
                  <span>Fri</span> 08:00 AM - 02:00 PM
                </p>
                <p>
                  <span>Sat</span> Closed
                </p>
                <p>
                  <span>Sun</span> 08:00 AM - 08:00 PM
                </p>
              </section>
            </article>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Loc;
