import React, { useContext } from "react";
import "./CSS/Cart.css";
import { ShopContext } from "../Context/ShopContext";
import { UserContext } from "../Context/UserContext";
import { Link } from "react-router-dom";
import { FaTrashAlt, FaMinus, FaPlus } from 'react-icons/fa';

const Cart = () => {
  const { user } = useContext(UserContext);
  const { cartItems, all_product, removeFromCart, getTotalCartAmount, addToCart, decreaseQuantity } = useContext(ShopContext); // Added decreaseQuantity
  const totalAmount = getTotalCartAmount();

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
                      onError={(e) => { e.target.src = 'http://localhost:5000/images/default-image.png'; }}
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
                          onClick={() => cartItems[product.id] > 1 ? decreaseQuantity(product.id) : removeFromCart(product.id)} // Change here
                        >
                          <FaMinus />
                        </button>
                      </div>
                      <button
                        className="remove-btn"
                        onClick={() => removeFromCart(product.id)}
                      >
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
            <button className="checkout-btn">Proceed to Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
