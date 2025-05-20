import React from 'react';
import './Home.css';

import { Link } from 'react-router-dom';
import Footer from './hader_footer/footer';
import Header from './header';
import ProdH from './prodH';

const Home = () => {
  return (
    <div className="art">

<Header/>

      <div className="Line2"></div>
      <div className="home_img2">
        <div className="Rectangle-3"></div>
        <div className="exam">
          <h1 className="HOMEtext">Persol</h1>
          <h3 className="HOMEtext2">
            In persol of Rasoul you can wear what suits you and suits your personality...
          </h3>
          <Link to="/Loc" className="Rectangle-30" href='#'>
            <p style={{ margin: 'auto' }}>Read More</p>
          </Link>
          <Link to="/contact" className="Rectangle-31">
            <p style={{ margin: 'auto' }}>Order New</p>
          </Link>
          <div className="Line2-2"></div>
        </div>
      </div>

      <div className="Rectangle-8">
        <div className="card">
          
        <div
        
        className="img1"
      />
      
          <div className="Rectangle-10">
            <h3 className="TEXT-BOX">RAY-BAN</h3>
            <h6 className="TEXT-BOX-U">
              •Ray-Ban has been producing since 1936, and holds the world-class standards for its ideal products.
            </h6>
            <a type="button" className="button-small" href="https://www.ray-ban.com/usa" id="read">Read More</a>
          </div>
        </div>

        <div className="card">
       
          <div
        
            className="img2"
          />
      
          <div className="Rectangle-10">
            <h3 className="TEXT-BOX">DIOR</h3>
            <h6 className="TEXT-BOX-U">
              •Produced by Dior since 1990, attractive and comfortable features, as it contains advanced technology.
            </h6>
            <a className="button-small" id="read" href="https://www.mrporter.com/en-gb/">Read More</a>
          </div>
        </div>

        <div className="card">
          <div
        
            className="img3"
          />
          <div className="Rectangle-10">
            <h3 className="TEXT-BOX">OAKLEY</h3>
            <h6 className="TEXT-BOX-U">
              •Oakley is a company that cares about durability, strength and everything that concerns you.
            </h6>
            <a href="https://www.oakley.com" className="button-small">
              Read More 

            </a>
          </div>
        </div>
      </div>
      <div className="Some_box">
        <div className="SomeProducts">Some Products
          <div className="Rectangle-33"></div>
          <div className="TextSome"></div>
          <div className="Rectangle-34"></div>
          <div className="Rectangle-35"></div>
          <div className="Rectangle-36"></div>
          <div className="Line-8"></div>
          <div className="Line-9"></div>
          <div className="Line-10"></div>
          <div className="Line-11"></div>
          <div className="Line-12"></div>
          <div className="Line-13"></div>
          <div className="Line-14"></div>
        </div>
        <div className="Rectangle-32">


    <ProdH/>


        </div>
      </div>
      <div className="Rectangle-15"></div>




      <div className="Rectangle-81_1">
        <div className="Rectangle-19">
          <div className="img-01"></div>
          <div className="Rectangle-22">
            <div className="img-02"></div>
            <div className="text-pre">Prescription available<br /> Sunglasses</div>

       
            <Link to ='/prodD' className="Rectangle-23">

<div className="Shop-now1">Shop Now</div>
</Link>
          </div>

        </div>
        <div className="Rectangle-81_1_1">
          <div className="Rectangle-19_1">
            <div className='Rectangle_up'></div>
            <div className="img-03"></div>
            <div className="Rectangle-22">
              <div className="img-02_1"></div>
              <div className="text-pre">Prescription available<br /> Sunglasses</div>

       
              <Link to ='/prodR' className="Rectangle-23">

                <div className="Shop-now1">Shop Now</div>
                </Link>
            </div>

          </div>

        </div>
        <div className="Rectangle-81_1_1">
          <div className="Rectangle-19_1">
            <div className='Rectangle_up'></div>
            <div className="img-04"></div>
            <div className="Rectangle-22">
              <div className="img-02_2"></div>
              <div className="text-pre">Prescription available<br /> Sunglasses</div>

              <a href='#' className="Rectangle-23">

                <Link to = '/prodC' className="Shop-now1">Shop Now</Link>
              </a>
            </div>

          </div>

        </div>
        <div className="Rectangle-81_1_1">
          <div className="Rectangle-19_2">
            <div className='Rectangle_up'></div>
            <div className="img-05"></div>
            <div className="Rectangle-22_1">
              <div className="text-pre">Prescription available<br /> Roundglasses</div>

              <Link to ='/prod' className="Rectangle-23">

                <div className="Shop-now1">Shop Now</div>
                </Link>
            </div>

          </div>

        </div>

        <div className="Rectangle-19_3">
          <div className="Persol">Persol</div>
          <div className="TextPersol2">
            Persol embodies Italian craftsmanship with unparalleled luxury and timeless style. Renowned for its artisanal excellence, the brand's dedication to quality is unmistakable, from the skillfully shaped acetate to the intricate hinges. With a heritage spanning decades, Persol effortlessly blends classic elegance with contemporary design, creating eyewear that transcends trends and exudes distinct sophistication and effortless elegance. Persol's commitment to luxury shines through in every pair.


          </div>
        </div>
        <div className="Rectangle-20"></div>
      </div>
      <Footer />
    </div>

  );
};

export default Home;