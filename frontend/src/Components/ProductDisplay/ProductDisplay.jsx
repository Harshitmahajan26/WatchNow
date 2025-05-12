// src/Pages/ProductDisplay.jsx

import React, { useContext } from "react";
import './ProductDisplay.css';
import star_icon from '../Assets/star.png';
import star_dull_icon from '../Assets/star_dull.png';
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = ({ product }) => {
  const { addToCart } = useContext(ShopContext);

  if (!product) return <div className="productdisplay-error">Product not found</div>;

  const fullImageUrl = product.image?.startsWith('http')
    ? product.image
    : `http://localhost:5000/images/${product.image}`;
    console.log(fullImageUrl);


  const renderStaticStars = () => (
    <>
      <img src={star_icon} alt="star" />
      <img src={star_icon} alt="star" />
      <img src={star_icon} alt="star" />
      <img src={star_icon} alt="star" />
      <img src={star_dull_icon} alt="half star" />
    </>
  );
 

  return (
    <div className='productdisplay'>
      {/* LEFT */}
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          {[...Array(4)].map((_, i) => (
            <img key={i} src={fullImageUrl} alt={`${product.name} ${i}`} />
          ))}
        </div>
        <div className="productdisplay-img">
          <img className="productdisplay-main-img" src={fullImageUrl} alt={product.name} />
        </div>
      </div>

      {/* RIGHT */}
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
          {renderStaticStars()}
          <p>122 reviews</p>
        </div>
        <div className="productdisplay-right-prices">
          {product.old_price && (
            <div className="productdisplay-right-price-old">
              ₹{Math.round(product.old_price)}
            </div>
          )}
          <div className="productdisplay-right-price-new">
            ₹{Math.round(product.price || product.new_price || 0)}
          </div>
        </div>
        <div className="productdisplay-right-description">
          {product.description || "This is a stylish and elegant timepiece made for modern users."}
        </div>
        <div className="productdisplay-right-size">
          <h2>Select Size</h2>
          <div className="productdisplay-right-size-options">
            <div>Small: 26mm - 30mm</div>
            <div>Medium: 31mm - 36mm</div>
            <div>Large: 37mm+</div>
          </div>
        </div>

        {/* 👇 HIDE IF FROM new_collections */}
        {!product.source || product.source !== "new_collections" ? (
          <button className="productdisplay-addtocart" onClick={() => addToCart(product.id)}>
            ADD TO CART
          </button>
        ) : (
          <p className="productdisplay-outofstock">*Only Available in Store</p>
        )}

        <p className='productdisplay-right-category'>
          <span>Category:</span> {product.category || "Watch"}
        </p>
        <p className='productdisplay-right-category'>
          <span>Tags:</span>{" "}
          {product.category?.toLowerCase() === "men"
            ? "Men's Watch, Bold Design, Luxury Watch"
            : "Ladies Watch, Elegant Timepiece, Stylish Watch"}
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
