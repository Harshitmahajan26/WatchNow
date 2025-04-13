// src/Components/RelatedProducts/RelatedProduct.jsx
import React, { useContext } from 'react';
import './RelatedProducts.css';
import { ShopContext } from '../../Context/ShopContext';
import Item from '../Item/Item';
import { Link } from 'react-router-dom';

const RelatedProduct = ({ currentProductId, currentCategory }) => {
  const { all_product } = useContext(ShopContext);

  // Filter to get 4 other products from the same category (excluding current product)
  const relatedItems = all_product
    .filter(item =>
      item.category?.toLowerCase() === currentCategory?.toLowerCase() &&
      item.id !== currentProductId
    )
    .slice(0, 4);

  return (
    <div className='relatedproducts'>
      <h1>Related Products</h1>
      <hr />
      <div className='relatedproducts-item'>
        {relatedItems.length > 0 ? (
          relatedItems.map((item) => (
            <Link
              to={`/product/${item.id}`}
              key={item.id}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <Item
                id={item.id}
                name={item.name}
                image={item.image} // ✅ Let Item.jsx handle full path
                price={item.new_price || item.price}
                oldPrice={item.old_price}
                currency="₹"
              />
            </Link>
          ))
        ) : (
          <p>No related products found.</p>
        )}
      </div>
    </div>
  );
};

export default RelatedProduct;
