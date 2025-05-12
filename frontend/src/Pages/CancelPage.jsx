import React from "react";
import { Link } from "react-router-dom";

const CancelPage = () => {
  return (
    <div className="cancel-page">
      <h2>Payment Cancelled</h2>
      <Link to="/cart">
        <button>Return to Cart</button>
      </Link>
    </div>
  );
};

export default CancelPage;
