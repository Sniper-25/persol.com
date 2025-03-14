
import React from 'react';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Footer from '../../hader_footer/footer';

const Home = () => {
  return (
    <div className="art">



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
          <img
            src="/5c745b1d188e2142d3117dbd7581bed4.jpg"
            alt="img1"
            className="img1"
          />
          <div className="Rectangle-10">
            <h3 className="TEXT-BOX">RAY-BAN</h3>
            <h6 className="TEXT-BOX-U">
              •Bay-Ban has been producing since 1936, and holds the world-class standards for its ideal products.
            </h6>
            <a type="button" className="button-small" href="https://www.ray-ban.com/usa" id="read">Read More</a>
          </div>
        </div>

        <div className="card">
          <img
            src="/d14f8c875710bf957cc2f8e8c5ebc245.jpg"
            alt="img2"
            className="img1"
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
          <img
            src="/182207002_4.jpg"
            alt="img3"
            className="img1"
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


          <div className="Rectangle-81">
            <a href="#">  <FontAwesomeIcon icon={faArrowLeft} id='Arrow_left' /></a>
            <a href="#">  <FontAwesomeIcon icon={faArrowRight} id='Arrow_right' /></a>

            <div className="card1">
              <h3 className="TEXT-BOX1">RAY-BAN</h3>
              <img
                src="/d2fc29eae8b6662aecec98537139d14d.jpg"
                alt="img1_1"
                className="img11"
              />
              <div className="Rectangle-10_1">

                <div className="TEXT-BOX-U1">
                  <b id="TextSpical">Brand:</b> Gucci<br />
                  <b id="TextSpical">Model:</b> Retro Circle<br />

                  <b id="TextSpical">Type:</b> Metal Frame Glasses<br />
                  <b id="TextSpical">Price:</b> &lt;$420&gt;<br />
                  <b id="TextSpical">Offer:</b> $390
                </div>
                <a type="button" className="button-small1" href="#" id="read1">SORT</a>
              </div>
            </div>

            <div className="card1">
              <h3 className="TEXT-BOX1">DIOR</h3>
              <img
                src="/507b9d0e1ad9d33e9c6659b1d35c25e.jpg"
                alt="img2_1"
                className="img11"
              />
              <div className="Rectangle-10_1">

                <div className="TEXT-BOX-U1">
                  <b id="TextSpical">Brand:</b> Oakley<br />
                  <b id="TextSpical">Model:</b> Clear Vision<br />
                  <b id="TextSpical">Type:</b> Optical Glasses<br />
                  <b id="TextSpical">Price:</b> &lt;$360&gt;<br />
                  <b id="TextSpical">Offer:</b> $330
                </div>
                <a className="button-small1" id="read1" href="#">SORT</a>
              </div>
            </div>

            <div className="card1">
              <h3 className="TEXT-BOX1">OAKLEY<br />
              </h3>
              <img
                src="/522db309d9d260e6b7f2b49d4782bc8f.jpg"
                alt="img2_2"
                className="img11"
              />
              <div className="Rectangle-10_1">

                <div className="TEXT-BOX-U1">
                  <b id="TextSpical">Brand:</b> RAY-BAN<br />
                  <b id="TextSpical">Model:</b> Classic Round<br />
                  <b id="TextSpical">Type:</b> Polarized Sunglasses<br />
                  <b id="TextSpical">Price:</b> &lt;$999&gt;<br />
                  <b id="TextSpical">Offer:</b> $899
                </div>
                <a href="#" className="button-small1">
                  SORT

                </a>
              </div>
            </div>


          </div>

          <div className="header_search">
            <div className="search-sort">
              <input type="text" className="search" placeholder="Search..." />
              <button className="sort">Sort by Price</button>
            </div>
          </div>

        </div>
      </div>
      <div className="Rectangle-15"></div>




      <div className="Rectangle-81_1">
        <div className="Rectangle-19">
          <div className="img-01"></div>
          <div className="Rectangle-22">
            <div className="img-02"></div>
            <div className="text-pre">Prescription available<br /> Sunglasses</div>

            <a href='#' className="Rectangle-23">

              <div className="Shop-now1">Shop Now</div>
            </a>
          </div>

        </div>
        <div className="Rectangle-81_1_1">
          <div className="Rectangle-19_1">
            <div className='Rectangle_up'></div>
            <div className="img-03"></div>
            <div className="Rectangle-22">
              <div className="img-02_1"></div>
              <div className="text-pre">Prescription available<br /> Sunglasses</div>

              <a href='#' className="Rectangle-23">

                <div className="Shop-now1">Shop Now</div>
              </a>
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

                <div className="Shop-now1">Shop Now</div>
              </a>
            </div>

          </div>

        </div>
        <div className="Rectangle-81_1_1">
          <div className="Rectangle-19_2">
            <div className='Rectangle_up'></div>
            <div className="img-05"></div>
            <div className="Rectangle-22_1">
              <div className="text-pre">Prescription available<br /> Sunglasses</div>

              <a href='#' className="Rectangle-23">

                <div className="Shop-now1">Shop Now</div>
              </a>
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