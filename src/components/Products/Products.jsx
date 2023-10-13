import React from 'react';
import Product from './Product';
import { data } from '../../data';
import './products.css';
import { Link } from 'react-router-dom';
import Catigories from '../catigories/Catigories'

function Products() {

  const productsByCategory = data.reduce((acc, product) => {
    if (!acc[product.name]) {
      acc[product.name] = [];
    }
    acc[product.name].push(product);
    return acc;
  }, {});

  return (
    <div className='products-container'>
      <Catigories/>
      {Object.keys(productsByCategory).map((categoryName) => (
        <section key={categoryName} id={categoryName.toLowerCase()} className='category-section'>
          <h2>{categoryName.toUpperCase()}</h2>
          <div className='products'>
            {productsByCategory[categoryName].map((product, index) => (
              <Link  key={index} to={`/products/${product.id}`} >
              <Product
                key={index}
                name={product.title}
                description={product.description}
                price={product.price}
                imgUrl={product.imgUrl}
               
              />
              </Link>

              
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export default Products;
