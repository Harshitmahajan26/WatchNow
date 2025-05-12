// // src/Context/ShopContext.jsx

// import React, { createContext, useState, useEffect, useContext } from "react";
// import { UserContext } from "./UserContext"; // Import UserContext
// import all_product from "../Components/Assets/all_product"; 

// export const ShopContext = createContext();

// const ShopContextProvider = ({ children }) => {
//   const { user } = useContext(UserContext);  // Get user state from UserContext
//   const [cartItems, setCartItems] = useState({});

//   // Load cart from localStorage on mount
//   useEffect(() => {
//     const storedCart = localStorage.getItem("cartItems");
//     if (storedCart) {
//       setCartItems(JSON.parse(storedCart));
//     }
//   }, []);

//   // Save cart to localStorage on update
//   useEffect(() => {
//     localStorage.setItem("cartItems", JSON.stringify(cartItems));
//   }, [cartItems]);

//   // Function to get total cart amount
//   const getTotalCartAmount = () => {
//     return all_product.reduce((total, item) => {
//       if (cartItems[item.id]) {
//         return total + (item.new_price || item.price) * cartItems[item.id];
//       }
//       return total;
//     }, 0);
//   };

//   // Function to add product to cart
//   const addToCart = (id) => {
//     if (!user) {  // Check if user is logged in
//       alert("You need to log in to add items to the cart.");
//       return;
//     }
//     setCartItems((prevCart) => ({
//       ...prevCart,
//       [id]: (prevCart[id] || 0) + 1, // Increment quantity
//     }));
//   };

//   // Function to remove product from cart
//   const removeFromCart = (id) => {
//     setCartItems((prevCart) => {
//       const updatedCart = { ...prevCart };
//       if (updatedCart[id]) {
//         delete updatedCart[id]; // Remove product from cart
//       }
//       return updatedCart;
//     });
//   };

//   // Function to decrease product quantity in the cart
//   const decreaseQuantity = (id) => {
//     setCartItems((prevCart) => {
//       const updatedCart = { ...prevCart };
//       if (updatedCart[id] && updatedCart[id] > 1) {
//         updatedCart[id] -= 1; // Decrease quantity
//       }
//       return updatedCart;
//     });
//   };

//   return (
//     <ShopContext.Provider
//       value={{
//         cartItems,
//         all_product,
//         addToCart,
//         removeFromCart,
//         decreaseQuantity, // Added to support decreasing quantity
//         getTotalCartAmount,
//         setCartItems, // Add this to enable cart updates
//       }}
//     >
//       {children}
//     </ShopContext.Provider>
//   );
// };

// export default ShopContextProvider;





import React, { createContext, useState, useEffect, useContext } from "react";
import { UserContext } from "./UserContext";

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const { user } = useContext(UserContext);
  const [cartItems, setCartItems] = useState({});
  const [allProducts, setAllProducts] = useState([]);

  // Fetch products from backend
  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((data) => setAllProducts(data))
      .catch((err) => console.error("Failed to load products:", err));
  }, []);

  // Load cart from localStorage
  useEffect(() => {
    const storedCart = localStorage.getItem("cartItems");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  // Save cart to localStorage
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const getTotalCartAmount = () => {
    return allProducts.reduce((total, item) => {
      if (cartItems[item.id]) {
        return total + (item.new_price || item.price) * cartItems[item.id];
      }
      return total;
    }, 0);
  };

  const addToCart = (id) => {
    if (!user) {
      alert("You need to log in to add items to the cart.");
      return;
    }
    setCartItems((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => {
      const updated = { ...prev };
      delete updated[id];
      return updated;
    });
  };

  const decreaseQuantity = (id) => {
    setCartItems((prev) => {
      const updated = { ...prev };
      if (updated[id] > 1) {
        updated[id] -= 1;
      }
      return updated;
    });
  };

  return (
    <ShopContext.Provider
      value={{
        cartItems,
        allProducts,
        all_product: allProducts, // ✅ Alias for compatibility
        addToCart,
        removeFromCart,
        decreaseQuantity,
        getTotalCartAmount,
        setCartItems,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
