// src/Pages/ShopCategory.jsx
import React, { useContext } from "react";
import "./CSS/ShopCategory.css";
import { ShopContext } from "../Context/ShopContext";
import dropdown_icon from "../Components/Assets/dropdown_icon.png";
import Item from "../Components/Item/Item";

const ShopCategory = ({ banner, category }) => {
  const { all_product } = useContext(ShopContext);

  // Filter products based on category (case insensitive)
  const filteredProducts = all_product.filter(
    (item) =>
      item.category?.toLowerCase() === category?.toLowerCase()
  );

  return (
    <div className="shop-category">
      {/* Banner image at the top */}
      <img
        className="shopcategory-banner"
        src={banner}
        alt="Shop Category Banner"
      />

      {/* Sorting info */}
      <div className="shop-category-indexSort">
        <p>
          <span>Showing {filteredProducts.length}</span> out of {all_product.length} products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="Sort icon" />
        </div>
      </div>

      {/* Product List */}
      <div className="shopcategory-products">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item) => (
            <Item
              key={item.id}
              id={item.id}
              name={item.name}
              image={item.image} // ✅ Only the relative path like 'women/xyz.jpg'
              price={item.new_price || item.price}
              oldPrice={item.old_price}
              currency="₹"
            />
          ))
        ) : (
          <p>No products found in this category.</p>
        )}
      </div>

      {/* Load more button */}
      <div className="shopcategory-loadmore">Explore More</div>
    </div>
  );
};

export default ShopCategory;


