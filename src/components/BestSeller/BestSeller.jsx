// BestSeller.js

import React from 'react';
import './BestSeller.css';

const BestSeller = () => {
  return (
    <div className='best-seller-container'>
      <h2>Our Best Sellers</h2>
      <div className='image-grid'>
        <div className='image'>
          <img src='/images/best1.jpg' alt='Cake' />
        </div>
        <div className='image'>
          <img src='/images/best2.jpg' alt='Cake' />
        </div>
        <div className='image'>
          <img src='/images/best3.jpg' alt='Cake' />
        </div>
        <div className='image'>
          <img src='/images/best4.jpg' alt='Cake' />
        </div>
        <div className='image'>
          <img src='/images/best5.jpg' alt='Cake' />
        </div>
        <div className='image'>
          <img src='/images/best6.jpg' alt='Cake' />
        </div>
        <div className='image'>
          <img src='/images/best7.jpg' alt='Cake' />
        </div>
        <div className='image'>
          <img src='/images/best8.jpg' alt='Cake' />
        </div>
        
      </div>
    </div>
  );
};

export default BestSeller;
