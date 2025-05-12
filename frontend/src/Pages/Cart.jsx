// import React, { useContext } from "react";
// import "./CSS/Cart.css";
// import { ShopContext } from "../Context/ShopContext";
// import { UserContext } from "../Context/UserContext";
// import { Link } from "react-router-dom";
// import { FaTrashAlt, FaMinus, FaPlus } from 'react-icons/fa';

// const Cart = () => {
//   const { user } = useContext(UserContext);
//   const { cartItems, all_product, removeFromCart, getTotalCartAmount, addToCart, decreaseQuantity } = useContext(ShopContext); // Added decreaseQuantity
//   const totalAmount = getTotalCartAmount();

//   if (!user) {
//     return (
//       <div className="cart-login-prompt">
//         <h2>Please log in to view your cart</h2>
//         <Link to="/login">
//           <button className="login-btn">Login</button>
//         </Link>
//       </div>
//     );
//   }

//   return (
//     <div className="cart">
//       <h2>Your Cart</h2>

//       {Object.keys(cartItems).length === 0 || totalAmount === 0 ? (
//         <div className="cart-empty">
//           <p>Your cart is empty!</p>
//           <Link to="/">
//             <button className="cart-continue">Continue Shopping</button>
//           </Link>
//         </div>
//       ) : (
//         <div className="cart-content">
//           <div className="cart-items">
//             {all_product.map((product) => {
//               if (cartItems[product.id] > 0) {
//                 const fullImageUrl = `http://localhost:5000/images/${product.image}`;

//                 return (
//                   <div className="cart-item" key={product.id}>
//                     <img
//                       src={fullImageUrl}
//                       alt={product.name}
//                       className="cart-item-image"
//                       onError={(e) => { e.target.src = 'http://localhost:5000/images/default-image.png'; }}
//                     />
//                     <div className="cart-item-details">
//                       <h3>{product.name}</h3>
//                       <p>₹{product.new_price || product.price}</p>
//                       <div className="cart-quantity">
//                         <button className="quantity-btn" onClick={() => addToCart(product.id)}>
//                           <FaPlus />
//                         </button>
//                         <span>{cartItems[product.id]}</span>
//                         <button
//                           className="quantity-btn"
//                           onClick={() => cartItems[product.id] > 1 ? decreaseQuantity(product.id) : removeFromCart(product.id)} // Change here
//                         >
//                           <FaMinus />
//                         </button>
//                       </div>
//                       <button
//                         className="remove-btn"
//                         onClick={() => removeFromCart(product.id)}
//                       >
//                         <FaTrashAlt /> Remove
//                       </button>
//                     </div>
//                   </div>
//                 );
//               }
//               return null;
//             })}
//           </div>

//           <div className="cart-summary">
//             <h3>Cart Summary</h3>
//             <p>Total: ₹{totalAmount}</p>
//             <button className="checkout-btn">Proceed to Checkout</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Cart;


import React, { useContext } from "react";
import "./CSS/Cart.css";
import { ShopContext } from "../Context/ShopContext";
import { UserContext } from "../Context/UserContext";
import { Link } from "react-router-dom";
import { FaTrashAlt, FaMinus, FaPlus } from 'react-icons/fa';

const Cart = () => {
  const { user } = useContext(UserContext);
  const {
    cartItems,
    all_product,
    removeFromCart,
    getTotalCartAmount,
    addToCart,
    decreaseQuantity
  } = useContext(ShopContext);

  const totalAmount = getTotalCartAmount();

  const handleCheckout = async () => {
    try {
      const cartData = all_product
        .filter(product => cartItems[product.id] > 0)
        .map(product => ({
          id: product.id,
          name: product.name,
          price: product.new_price || product.price,
          quantity: cartItems[product.id],
        }));

      const res = await fetch("http://localhost:5000/api/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ cartItems: cartData }),
      });

      const data = await res.json();
      if (data.url) {
        window.location.href = data.url; // Redirect to Stripe Checkout
      }
    } catch (error) {
      console.error("Checkout error:", error);
      alert("Payment failed. Please try again.");
    }
  };

  if (!user) {
    return (
      <div className="cart-login-prompt">
        <h2>Please log in to view your cart</h2>
        <Link to="/login">
          <button className="login-btn">Login</button>
        </Link>
      </div>
    );
  }

  if (!all_product || all_product.length === 0) {
    return <div className="cart-loading">Loading products...</div>;
  }

  return (
    <div className="cart">
      <h2>Your Cart</h2>

      {Object.keys(cartItems).length === 0 || totalAmount === 0 ? (
        <div className="cart-empty">
          <p>Your cart is empty!</p>
          <Link to="/">
            <button className="cart-continue">Continue Shopping</button>
          </Link>
        </div>
      ) : (
        <div className="cart-content">
          <div className="cart-items">
            {all_product.map((product) => {
              if (cartItems[product.id] > 0) {
                const fullImageUrl = `http://localhost:5000/images/${product.image}`;

                return (
                  <div className="cart-item" key={product.id}>
                    <img
                      src={fullImageUrl}
                      alt={product.name}
                      className="cart-item-image"
                      onError={(e) => {
                        e.target.src = 'http://localhost:5000/images/default-image.png';
                      }}
                    />
                    <div className="cart-item-details">
                      <h3>{product.name}</h3>
                      <p>₹{product.new_price || product.price}</p>
                      <div className="cart-quantity">
                        <button className="quantity-btn" onClick={() => addToCart(product.id)}>
                          <FaPlus />
                        </button>
                        <span>{cartItems[product.id]}</span>
                        <button
                          className="quantity-btn"
                          onClick={() =>
                            cartItems[product.id] > 1
                              ? decreaseQuantity(product.id)
                              : removeFromCart(product.id)
                          }
                        >
                          <FaMinus />
                        </button>
                      </div>
                      <button className="remove-btn" onClick={() => removeFromCart(product.id)}>
                        <FaTrashAlt /> Remove
                      </button>
                    </div>
                  </div>
                );
              }
              return null;
            })}
          </div>

          <div className="cart-summary">
            <h3>Cart Summary</h3>
            <p>Total: ₹{totalAmount}</p>
            <button className="checkout-btn" onClick={handleCheckout}>
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
