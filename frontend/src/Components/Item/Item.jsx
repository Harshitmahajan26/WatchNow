// src/Components/Item/Item.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import './Item.css';

const Item = ({ id, name, image, price, oldPrice, currency, source }) => {
  const imageUrl = image?.startsWith("http") || image?.startsWith("/")
    ? image
    : `http://localhost:5000/images/${image}`;

  return (
    <div className="item">
      <Link to={`/product/${id}`} state={{ source }}>
        <img
          src={imageUrl}
          alt={name}
          onError={(e) => {
            e.target.src = "http://localhost:5000/images/default-image.png";
          }}
        />
      </Link>
      <p>{name}</p>

      <div className="item-prices">
        {oldPrice && (
          <p className="item-old-price">
            <s>{currency}{Number(oldPrice).toFixed(2)}</s>
          </p>
        )}
        <p className="item-new-price">
          {currency}{Number(price).toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default Item;
