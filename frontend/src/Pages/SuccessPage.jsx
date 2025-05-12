import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";

const SuccessPage = () => {
  const { clearCart } = useContext(ShopContext);
  const navigate = useNavigate();

  useEffect(() => {
    clearCart();
    const timer = setTimeout(() => {
      navigate("/shop");
    }, 3000);
    return () => clearTimeout(timer);
  }, [clearCart, navigate]);

  return (
    <div className="success-page">
      <h2>✅ Payment Successful!</h2>
      <p>Redirecting you to homepage...</p>
    </div>
  );
};

export default SuccessPage;
