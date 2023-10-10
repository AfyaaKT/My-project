import React from 'react';
import './catigories.css';
import { Link } from 'react-router-dom';

const Catigories = () => {
  return (
    <div className='catigories'>
      <Link to='/products#category-cake'>
        <div className='three category'>
        </div>
      </Link>
      <Link to='/products#category-cheesecake'>
        <div className='two category'>
        </div>
      </Link> 
      <Link to='/products#category-cupcake'>
        <div className='one category'>
        </div>
      </Link>
      <Link to='/products#category-cookie'>
        <div className='four category'>
        </div>
      </Link>
    </div>
  );
};

export default Catigories;
