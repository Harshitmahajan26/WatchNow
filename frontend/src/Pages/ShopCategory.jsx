// // src/Pages/ShopCategory.jsx
// import React, { useContext } from "react";
// import "./CSS/ShopCategory.css";
// import { ShopContext } from "../Context/ShopContext";
// import dropdown_icon from "../Components/Assets/dropdown_icon.png";
// import Item from "../Components/Item/Item";

// const ShopCategory = ({ banner, category }) => {
//   const { all_product } = useContext(ShopContext);

//   // Filter products based on category (case insensitive)
//   const filteredProducts = all_product.filter(
//     (item) =>
//       item.category?.toLowerCase() === category?.toLowerCase()
//   );

//   return (
//     <div className="shop-category">
//       {/* Banner image at the top */}
//       <img
//         className="shopcategory-banner"
//         src={banner}
//         alt="Shop Category Banner"
//       />

//       {/* Sorting info */}
//       <div className="shop-category-indexSort">
//         <p>
//           <span>Showing {filteredProducts.length}</span> out of {all_product.length} products
//         </p>
//         <div className="shopcategory-sort">
//           Sort by <img src={dropdown_icon} alt="Sort icon" />
//         </div>
//       </div>

//       {/* Product List */}
//       <div className="shopcategory-products">
//         {filteredProducts.length > 0 ? (
//           filteredProducts.map((item) => (
//             <Item
//               key={item.id}
//               id={item.id}
//               name={item.name}
//               image={item.image} // ✅ Only the relative path like 'women/xyz.jpg'
//               price={item.new_price || item.price}
//               oldPrice={item.old_price}
//               currency="₹"
//             />
//           ))
//         ) : (
//           <p>No products found in this category.</p>
//         )}
//       </div>

//       {/* Load more button */}
//       <div className="shopcategory-loadmore">Explore More</div>
//     </div>
//   );
// };

// export default ShopCategory;




// src/Pages/ShopCategory.jsx

import React, { useContext } from "react";
import "./CSS/ShopCategory.css";
import dropdown_icon from "../Components/Assets/dropdown_icon.png";
import Item from "../Components/Item/Item";
import { ShopContext } from "../Context/ShopContext";
// Optional: import a client-side placeholder for missing images
// import placeholder from "../Assets/placeholder.png";

const ShopCategory = ({ banner, category }) => {
  const { allProducts } = useContext(ShopContext);

  if (!allProducts || allProducts.length === 0) {
    return (
      <div className="shop-category">
        <p>Loading products...</p>
      </div>
    );
  }

  const filteredProducts = allProducts.filter(
    (item) => item.category?.toLowerCase() === category?.toLowerCase()
  );

  return (
    <div className="shop-category">
      {/* Banner image */}
      <img
        className="shopcategory-banner"
        src={banner}
        alt="Shop Category Banner"
      />

      {/* Product count and sort */}
      <div className="shop-category-indexSort">
        <p>
          <span>Showing {filteredProducts.length}</span> out of{" "}
          {allProducts.length} products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="Sort icon" />
        </div>
      </div>

      {/* Product list */}
      <div className="shopcategory-products">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item) => {
            // build the image URL or fall back to a client-side placeholder
            const imageUrl = item.image
              ? `http://localhost:5000/images/${item.image}`
              : null; 
              // or if you imported a placeholder:
              // : placeholder;

            return (
              <Item
                key={item.id}
                id={item.id}
                name={item.name}
                image={imageUrl}
                price={item.new_price || item.price}
                oldPrice={item.old_price}
                currency={item.currency || "₹"}
              />
            );
          })
        ) : (
          <p>No products found in this category.</p>
        )}
      </div>

      {/* Load more */}
      <div className="shopcategory-loadmore">Explore More</div>
    </div>
  );
};

export default ShopCategory;
