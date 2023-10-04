import React from 'react';
import Product from './Product'; 
import { data } from '../../data'; 
import './products.css'

function Products() {
  return (
    <div className="products-container">
      {data.map((cake, index) => (
        <Product
          key={index}
          name={cake.title}
          description={cake.description}
          price={cake.price}
          imageUrl={cake.imgUrl}
        />
      ))}
    </div>
  );
}

export default Products;
