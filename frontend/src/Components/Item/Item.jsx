// import React from 'react';
// import './Item.css';

// const Item = ({ id, name, image, price, currency, old_price }) => {
//   return (
//     <div className='item'>
//      <Link to={`/product/${props.id}`}><img src={image} alt={name} /></Link>  
//       <p>{name}</p>
//       <div className="item-prices">
//         <div className="item-price-new">
//           {currency} {price}
//         </div>
//         {old_price && (
//           <div className="item-price-old">
//             {currency} {old_price}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Item;

// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Item.css';

// const Item = ({ id, name, image, price, currency }) => {
//   return (
//     <div className='item'>
//       <Link to={`/product/${id}`}>
//         <img onClick={window.scrollTo(0,0)} src={image} alt={name} />
//       </Link>  
//       <p>{name}</p>
//       <div className="item-prices">
//         <div className="item-price-new">
//           {currency} {price}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Item;

// src/Components/Item/Item.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Item.css';

const Item = ({ id, name, image, price, oldPrice, currency }) => {
  let imageUrl = "";

  // ✅ Build the full image path
  if (typeof image === "string") {
    imageUrl = image.startsWith("http") || image.startsWith("/")
      ? image
      : `http://localhost:5000/images/${image}`;
  } else {
    imageUrl = image;
  }

  return (
    <div className="item">
      <Link to={`/product/${id}`}>
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
        {oldPrice && !isNaN(Number(oldPrice)) && (
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
