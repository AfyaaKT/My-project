import React from 'react';
import Product from './Product';
import { data } from '../../data';
import './products.css';
import { useContext } from 'react';
import Context from '../CartItems/CartItems';

function Products() {
  const { addToCart } = useContext(Context);

  const productsByCategory = data.reduce((acc, product) => {
    if (!acc[product.name]) {
      acc[product.name] = [];
    }
    acc[product.name].push(product);
    return acc;
  }, {});

  return (
    <div className='products-container'>
       {Object.keys(productsByCategory).map((categoryName) => (
      <section key={categoryName} id={`category-${categoryName.toLowerCase()}`} className='category-section'>
        <h2>{categoryName}</h2>
          <div className='products'>
            {productsByCategory[categoryName].map((product, index) => (
              <Product
                key={index}
                name={product.title}
                description={product.description}
                price={product.price}
                imageUrl={product.imgUrl}
                onAddToCart={addToCart}
              />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export default Products;
