// import React from 'react'
// import './Breadcrum.css'
// import arrow_icon from '../Assets/breadcrum_arrow.jpeg'

// const Breadcrum = () => {
//     const {product}=props;
//   return (
//     <div>
//       <div className='breadcrum'>
//         HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt=""/>{product.category}<img src={arrow_icon} alt=""/>{product.name}
//       </div>
//     </div>
//   )
// }

// export default Breadcrum



import React from 'react';
import './Breadcrum.css';
import arrow_icon from '../Assets/breadcrum_arrow.jpg';

const Breadcrum = (props) => {
  const { product } = props;  // Fix: Extract product from props
  return (
    <div className='breadcrum'>
      HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" /> {product?.category} <img src={arrow_icon} alt="" /> {product?.name}
    </div>
  );
};

export default Breadcrum;
