import React, { useEffect, useState } from 'react';
import './NewCollections.css';
import Item from '../Item/Item'; 
import { Link } from 'react-router-dom'; 

const NewCollections = () => {
  const [newCollections, setNewCollections] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/new-collections')
      .then(res => res.json())
      .then(data => {
        setNewCollections(data);
      })
      .catch(error => {
        console.error("Error fetching new collections:", error);
      });
  }, []);

  return (
    <div className='new-collections'>
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections">
      {newCollections.map((item) => {
  return (
    <Link 
      to={`/product/${item.id}`} 
      key={item.id} 
      style={{ textDecoration: 'none', color: 'inherit' }}
    >
      <Item 
        id={item.id} 
        name={item.name} 
        image={`http://localhost:5000/images/${item.image}`} 
        price={item.price}
        oldPrice={item.old_price}
        currency={item.currency}
      />
    </Link>
  );
})}
      </div>
    </div>
  );
};

export default NewCollections;
