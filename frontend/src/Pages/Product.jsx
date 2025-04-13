import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';

const Product = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Step 1: Try main product list
    fetch(`http://localhost:5000/api/products/${productId}`)
      .then(res => {
        if (!res.ok) throw new Error('Not found in products');
        return res.json();
      })
      .then(data => {
        setProduct(data);
      })
      .catch(() => {
        // Step 2: Fallback to new collections
        fetch('http://localhost:5000/api/new-collections')
          .then(res => res.json())
          .then(data => {
            const found = data.find(p => p.id === parseInt(productId));
            setProduct(found || null);
          });
      });
  }, [productId]);

  return (
    <div>
      <ProductDisplay product={product} />
    </div>
  );
};

export default Product;
