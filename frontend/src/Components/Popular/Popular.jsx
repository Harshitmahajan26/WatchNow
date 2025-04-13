// import React from 'react';
// import './Popular.css';
// import all_product from '../Assets/all_product';
// import Item from '../Item/Item';

// const Popular = () => {
//   // Get only the first 4 women's products
//   const womenProducts = all_product
//     .filter((item) => item.category === 'women')
//     .slice(0, 4); // ✅ This limits it to 4 items

//   return (
//     <div className='popular'>
//       <h1>POPULAR IN WOMEN</h1>
//       <hr />
//       <div className="popular-item">
//         {womenProducts.map((item) => (
//           <Item 
//             key={item.id} 
//             id={item.id} 
//             name={item.name} 
//             image={item.image} 
//             price={item.price} 
//             currency="₹"
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Popular;





// // import React, { useEffect, useState } from 'react';
// // import './Popular.css';
// // import axios from 'axios';
// // import Item from '../Item/Item';

// // const Popular = () => {
// //   const [womenProducts, setWomenProducts] = useState([]);

// //   useEffect(() => {
// //     axios.get('/products')
// //       .then((res) => {
// //         const filtered = res.data
// //           .filter((item) => item.category === 'women')
// //           .slice(0, 4); // Only first 4 women’s products
// //         setWomenProducts(filtered);
// //       })
// //       .catch((err) => {
// //         console.error('Error fetching products:', err);
// //       });
// //   }, []);

// //   return (
// //     <div className='popular'>
// //       <h1>POPULAR IN WOMEN</h1>
// //       <hr />
// //       <div className="popular-item">
// //         {womenProducts.map((item) => (
// //           <Item 
// //             key={item.id} 
// //             id={item.id} 
// //             name={item.name} 
// //             image={item.image} 
// //             price={item.new_price} 
// //             currency="₹"
// //           />
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Popular;

import React, { useEffect, useState } from 'react';
import './Popular.css';
import axios from 'axios';
import Item from '../Item/Item';

const Popular = () => {
  const [womenProducts, setWomenProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/products')
      .then((res) => {
        const filtered = res.data
          .filter((item) => item.category === 'women')
          .slice(0, 4);
        setWomenProducts(filtered);
      })
      .catch((err) => {
        console.error('Error fetching products:', err);
      });
  }, []);

  return (
    <div className="popular">
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className="popular-item">
        {womenProducts.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            name={item.name}
            image={`http://localhost:5000/images/${item.image}`}  // ✅ Add full path here
            price={item.new_price || item.price}
            oldPrice={item.old_price}
            currency="₹"
          />
        ))}
      </div>
    </div>
  );
};

export default Popular;
