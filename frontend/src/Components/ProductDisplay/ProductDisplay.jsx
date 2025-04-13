// import './ProductDisplay.css';
// import star_icon from '../Assets/star.png';
// import star_dull_icon from '../Assets/star_dull.png';

// const ProductDisplay = ({ product }) => {

//   // Error handling for missing product
//   if (!product) return <div className="productdisplay-error">Product not found</div>;

//   const fullImageUrl = `http://localhost:5000/images/${product.image}`;

//   // Render the product stars dynamically based on the rating
//   const renderStars = (rating) => {
//     const totalStars = 5;
//     const fullStars = Math.floor(rating);
//     const halfStars = (rating - fullStars) >= 0.5 ? 1 : 0;
//     const emptyStars = totalStars - (fullStars + halfStars);

//     let stars = [];
//     for (let i = 0; i < fullStars; i++) {
//       stars.push(<img key={`full-${i}`} src={star_icon} alt="star" />);
//     }
//     for (let i = 0; i < halfStars; i++) {
//       stars.push(<img key={`half-${i}`} src={star_icon} alt="half star" />);
//     }
//     for (let i = 0; i < emptyStars; i++) {
//       stars.push(<img key={`empty-${i}`} src={star_dull_icon} alt="empty star" />);
//     }

//     return stars;
//   };

//   return (
//     <div className='productdisplay'>
//       {/* LEFT SIDE */}
//       <div className="productdisplay-left">
//         <div className="productdisplay-img-list">
//           {[...Array(4)].map((_, index) => (
//             <img
//               key={index}
//               src={fullImageUrl}
//               alt={`${product.name} view ${index + 1}`}
//               onError={(e) => { e.target.src = 'http://localhost:5000/images/default-image.png'; }}
//             />
//           ))}
//         </div>

//         <div className="productdisplay-img">
//           <img
//             className='productdisplay-main-img'
//             src={fullImageUrl}
//             alt={product.name}
//             onError={(e) => { e.target.src = 'http://localhost:5000/images/default-image.png'; }}
//           />
//         </div>
//       </div>

//       {/* RIGHT SIDE */}
//       <div className="productdisplay-right">
//         <h1>{product.name}</h1>

//         {/* STAR RATINGS */}
//         <div className="productdisplay-right-star">
//           {renderStars(4.5)} {/* Replace with dynamic rating from product */}
//           <p>122 reviews</p>
//         </div>

//         {/* PRICES */}
//         <div className="productdisplay-right-prices">
//           {product.old_price && (
//             <div className="productdisplay-right-price-old">
//               ₹{Math.round(product.old_price)}
//             </div>
//           )}
//           <div className='productdisplay-right-price-new'>
//             ₹{Math.round(product.price || product.new_price || 0)}
//           </div>
//         </div>

//         {/* DESCRIPTION */}
//         <div className="productdisplay-right-description">
//           {product.description || "This is a stylish and elegant timepiece made for modern women."}
//         </div>

//         {/* SIZE OPTIONS */}
//         <div className="productdisplay-right-size">
//           <h2>Select Size</h2>
//           <div className="productdisplay-right-size-options">
//             <div>Small: 26mm - 30mm</div>
//             <div>Medium: 31mm - 36mm</div>
//             <div>Large: 37mm+</div>
//           </div>
//         </div>

//         {/* ADD TO CART */}
//         <button className="productdisplay-addtocart">ADD TO CART</button>

//         {/* CATEGORY AND TAGS */}
//         <p className='productdisplay-right-category'>
//           <span>Category:</span> {product.category || "Women's Watches"}
//         </p>

//         <p className='productdisplay-right-category'>
//           <span>Tags:</span> {
//             product.category?.trim().toLowerCase() === "men"
//               ? "Men's Watch, Bold Design, Masculine Style, Luxury Watch"
//               : "Ladies Watch, Elegant Timepiece, Luxury for Women, Stylish Watch"
//           }
//         </p>
//       </div>
//     </div>
//   );
// };

// export default ProductDisplay;




// src/Pages/ProductDisplay.jsx

import React, { useContext } from "react";
import './ProductDisplay.css';
import star_icon from '../Assets/star.png';
import star_dull_icon from '../Assets/star_dull.png';
import { ShopContext } from "../../Context/ShopContext"; // ✅ Import the ShopContext

const ProductDisplay = ({ product }) => {
  const { addToCart } = useContext(ShopContext); // ✅ Use addToCart function

  // Error handling for missing product
  if (!product) return <div className="productdisplay-error">Product not found</div>;

  const fullImageUrl = `http://localhost:5000/images/${product.image}`;

  // Render the product stars dynamically based on the rating
  const renderStars = (rating) => {
    const totalStars = 5;
    const fullStars = Math.floor(rating);
    const halfStars = (rating - fullStars) >= 0.5 ? 1 : 0;
    const emptyStars = totalStars - (fullStars + halfStars);

    let stars = [];
    for (let i = 0; i < fullStars; i++) {
      stars.push(<img key={`full-${i}`} src={star_icon} alt="star" />);
    }
    for (let i = 0; i < halfStars; i++) {
      stars.push(<img key={`half-${i}`} src={star_icon} alt="half star" />);
    }
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<img key={`empty-${i}`} src={star_dull_icon} alt="empty star" />);
    }

    return stars;
  };

  return (
    <div className='productdisplay'>
      {/* LEFT SIDE */}
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          {[...Array(4)].map((_, index) => (
            <img
              key={index}
              src={fullImageUrl}
              alt={`${product.name} view ${index + 1}`}
              onError={(e) => { e.target.src = 'http://localhost:5000/images/default-image.png'; }}
            />
          ))}
        </div>

        <div className="productdisplay-img">
          <img
            className='productdisplay-main-img'
            src={fullImageUrl}
            alt={product.name}
            onError={(e) => { e.target.src = 'http://localhost:5000/images/default-image.png'; }}
          />
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="productdisplay-right">
        <h1>{product.name}</h1>

        {/* STAR RATINGS */}
        <div className="productdisplay-right-star">
          {renderStars(4.5)} {/* Replace with dynamic rating from product if needed */}
          <p>122 reviews</p>
        </div>

        {/* PRICES */}
        <div className="productdisplay-right-prices">
          {product.old_price && (
            <div className="productdisplay-right-price-old">
              ₹{Math.round(product.old_price)}
            </div>
          )}
          <div className='productdisplay-right-price-new'>
            ₹{Math.round(product.price || product.new_price || 0)}
          </div>
        </div>

        {/* DESCRIPTION */}
        <div className="productdisplay-right-description">
          {product.description || "This is a stylish and elegant timepiece made for modern women."}
        </div>

        {/* SIZE OPTIONS */}
        <div className="productdisplay-right-size">
          <h2>Select Size</h2>
          <div className="productdisplay-right-size-options">
            <div>Small: 26mm - 30mm</div>
            <div>Medium: 31mm - 36mm</div>
            <div>Large: 37mm+</div>
          </div>
        </div>

        {/* ✅ ADD TO CART BUTTON */}
        <button
          className="productdisplay-addtocart"
          onClick={() => addToCart(product.id)}
        >
          ADD TO CART
        </button>

        {/* CATEGORY AND TAGS */}
        <p className='productdisplay-right-category'>
          <span>Category:</span> {product.category || "Women's Watches"}
        </p>

        <p className='productdisplay-right-category'>
          <span>Tags:</span> {
            product.category?.trim().toLowerCase() === "men"
              ? "Men's Watch, Bold Design, Masculine Style, Luxury Watch"
              : "Ladies Watch, Elegant Timepiece, Luxury for Women, Stylish Watch"
          }
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
