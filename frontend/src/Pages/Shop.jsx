// import React from 'react'
// import Hero from '../Components/Hero/Hero'
// import Popular from '../Components/Popular/Popular'
// import Offers from '../Components/Offers/Offers'
// import NewCollections from '../Components/NewCollections/NewCollections'
// import NewsLetter from '../Components/NewsLetter/NewsLetter'

// const Shop = () => {
//   return (
//     <div>
//       <Hero/>
//       <Popular/>
//       <Offers/>
//       <NewCollections/>
//       <NewsLetter/>
//     </div>
//   )
// }

// export default Shop




import React, { useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';

import Hero from '../Components/Hero/Hero';
import Popular from '../Components/Popular/Popular';
import Offers from '../Components/Offers/Offers';
import NewCollections from '../Components/NewCollections/NewCollections';
import NewsLetter from '../Components/NewsLetter/NewsLetter';

const Shop = () => {
  const { setCartItems } = useContext(ShopContext);
  const location = useLocation();

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    if (query.get("redirectedFromStripe")) {
      // ✅ Clear cart if redirected from Stripe
      setCartItems({});
      localStorage.removeItem("cartItems");
    }
  }, [location, setCartItems]);

  return (
    <div>
      <Hero />
      <Popular />
      <Offers />
      <NewCollections />
      <NewsLetter />
    </div>
  );
};

export default Shop;
