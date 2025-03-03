// import React from 'react'
// import './Item.css'

// const Item = (props) => {
//   return (
//     <div className='item'>
//       <img src={props.image} alt="" />
//       <p>{props.name}</p>
//       <div className="item-prices">
//         <div className="item-price-new">
//             {props.new_price}
//         </div>
//         <div className="item-price-old">
//             {props.old_price}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Item
import React from 'react';
import './Item.css';

const Item = ({ id, name, image, price, currency, old_price }) => {
  return (
    <div className='item'>
      <img src={image} alt={name} />
      <p>{name}</p>
      <div className="item-prices">
        <div className="item-price-new">
          {currency} {price}
        </div>
        {old_price && (
          <div className="item-price-old">
            {currency} {old_price}
          </div>
        )}
      </div>
    </div>
  );
};

export default Item;