import React, { useState } from "react";
import "./about.css";
import Footer from "../../hader_footer/footer";

const About = () => {
  


  return (
    <div>
      {/* About Section */}

      <div className="control">
        <div className="about">
          <div className="backcolor">
            <h2>ABOUT US</h2>
            <p>
              Welcome to Persol, where vision meets fashion, and every pair of sunglasses tells a story.
              We believe that sunglasses are more than just an accessory - they’re an expression, a shield,
              and a way to see the world in a whole new light. Whether you’re chasing sunsets, exploring city
              streets, or simply enjoying a sunny afternoon, we’re here to make sure you do it in style.
            </p>

          </div>
        </div>
      </div>
      {/* Team Section */}
      <div className="section">
        <h2>Our Team</h2>
        <p>
          We're a vibrant group of individuals brought together by a shared passion for blending style with functionality.
          From designers to marketers, every member of our team brings a unique flair and dedication to ensuring you find the perfect pair of shades.
          Meet the faces behind your favorite eyewear - the passionate, stylish souls of Persol.
        </p>

        <div className="team-images">
          <div className="Img1" />
          <div  className="Img2"/>
          <div className="Img3" />
        </div>

        <div className="main-image"/>
      </div>

      {/* Why Are We The Best Section */}
      <div className="why">
        <h2>WHY ARE WE THE BEST ?</h2>
        <p>
          At Persol, we’re more than just eyewear - we’re a commitment to quality, style, and innovation.
          Here’s why we’re the top choice for your next pair of shades:
        </p>

        <ul>
          <li><strong>Unmatched Quality:</strong> Premium materials, hand-crafted design, and rigorous testing ensure long-lasting durability and comfort.</li>
          <li><strong>Innovative Designs:</strong> Trendsetting styles and customizable options for every personality.</li>
          <li><strong>Exceptional Comfort:</strong> Ergonomic frames designed for all-day wear.</li>
        </ul>

        <p>Join the Persol family and elevate your style today. Your perfect pair is waiting!</p>
      </div>

      
     

      <Footer />
    </div>
  );
};

export default About;