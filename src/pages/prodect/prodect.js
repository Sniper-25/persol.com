import React from "react";
import "./prodect.css"; // Ensure this CSS file is linked
import { Link } from "react-router-dom";
import Footer from "../../hader_footer/footer";
const Product = () => {
  const handleShopNow = (brand) => {
    console.log(`Redirecting to shop for ${brand}...`);
    // Add navigation logic here
  };

  return (
    <div>

      <div className="product-container">
        {/* Background Rectangles */}

        <div className="rectangle rectangle-149">



          <div className="rectangle rectangle-132">
            <div className="rectangle rectangle-127">
              <div className="image image-3"></div>

            </div>
            <div className="text text-bay-ban">
              •Bay-Ban has been producing since 1936, and holds the world-class
              standards for its ideal products.
              <Link to ='/prod' className="shop-now-button shop-now-1" onClick={() => handleShopNow("Bay-Ban")}>
                <span className="shop-now">Shop now</span>
              </Link>
            </div>
          </div>

          <div className="rectangle rectangle-134">
            <div className="rectangle rectangle-130">
              <div className="image image-2"></div>
            </div>
            <div className="text text-dior">
              •Produced by Dior since 1990, attractive and comfortable features, as it
              contains advanced technology.
              <Link to ='/prodR' className="shop-now-button shop-now-2" onClick={() => handleShopNow("Dior")}>
                <span className="shop-now">Shop now</span>
              </Link>
            </div>
          </div>

          <div className="rectangle rectangle-135">
            <div className="rectangle rectangle-131">

              <div className="image image-1"></div>
            </div>
            <div className="text text-oakley">
              •Oakley is a company that cares about durability, strength and
              everything that concerns you.

              <Link to='/prodD' className="shop-now-button shop-now-3" onClick={() => handleShopNow("Oakley")}>
                <span className="shop-now">Shop now</span>
              </Link>
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Product;