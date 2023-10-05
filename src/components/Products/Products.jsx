import React from 'react';
import Product from './Product'; 
import { data } from '../../data'; 
import './products.css'
import { useContext } from 'react';
import Context from '../CartItems/CartItems';


function Products() {
  
  const {addToCart}=useContext(Context)
  return (
    <div className="products-container">
      {data.map((cake, index) => (
        <Product
          key={index}
          name={cake.title}
          description={cake.description}
          price={cake.price}
          imageUrl={cake.imgUrl}
          onAddToCart={addToCart}

        />
      ))}
    </div>
  );
}

export default Products;

